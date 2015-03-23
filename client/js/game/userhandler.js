/*
 * Eventnames of UserHandler + Event attributes:
 * 'mouseDown': Fired when the user presses any mouse buttons down.
 *   {
 *     'x': Absolute X-Position of mouse
 *     'y': Absolute Y-Position of mouse
 *     'button': 0=None 1=LeftClick 2=RightClick 3=Middle
 *   }
 * 'mouseMove': Fired when the user moves the PRESSED mouse.
 *   {
 *     'x': Absolute X-Position of mouse after move
 *     'y': Absolute Y-Position of mouse after move
 *     'deltaX': Relative X-Movement
 *     'deltaY': Relative Y-Movement
 *     'button': 0=None 1=LeftClick 2=RightClick 3=Middle
 *   }
 * 'mouseUp': Fired when the user releases any mouse buttons.
 *   {
 *     'x': Absolute X-Position of mouse
 *     'y': Absolute Y-Position of mouse
 *     'button': 0=None 1=LeftClick 2=RightClick 3=Middle
 *     'moved': Whether the user moved the mouse before mouse up. 
 *   }
 * 'zoomUpdate': Fired when the zoom was updated.
 *   {
 *     'zoom': Zoom position from 0.05 (out) to 1 (in)
 *   }
 */

function UserHandler() {
  this.eventCache = [];
  
  this.zoom = 0.5;
  this.lastX = 0;
  this.lastY = 0;
  
  // Assign all events to it. Now it can start working.
  this.assignEvents = function() {
    var self = this;  // To avoid recursion
    var canvas = elementID('main-canvas');
    canvas.onmousedown = function(e) { self.onmousedown(e) };
    canvas.onmousemove = function(e) { self.onmousemove(e) };
    canvas.onmouseup = function(e) { self.onmouseup(e) };
    canvas.onwheel = function(e) { self.onwheel(e) };
  };
  
  // Get next event by FIFO principle. It will be removed afterwards.
  this.getNextEvent = function() {
    if (this.eventCache.length > 0) {
      var event = this.eventCache[0];
      this._removeEventByIndex(0);
      
      // Mouse movement handled; we can now have new deltas
      if (event.type === 'mouseMove')
        this.lastX = this.lastY = 0;
      
      return event;
    } else {
      return {type: 'none', data: {}};
    }
  }
  
  // Externally used event handler
  
  
  // Internal event handler
  
  this.onmousedown = function(e) {
    this.lastX = e.clientX;
    this.lastY = e.clientY;
    
    this._pushEvent('mouseDown', {
      'x': e.clientX,
      'y': e.clientY,
      'button': this._getButton(e)
    });
  };
  
  this.onmousemove = function(e) {
    // We only handle movement if mouse is down.
    if (this._isDown(e)) {
      var deltaX = e.clientX - this.lastX;
      var deltaY = e.clientY - this.lastY;
      
      this._pushUniqueEvent('mouseMove', {
      'x': e.clientX,
      'y': e.clientY,
      'deltaX': deltaX,
      'deltaY': deltaY,
      'button': this._getButton(e)
    });
    }
  };
  
  this.onmouseup = function(e) {
     this._pushEvent('mouseUp', {
      'x': e.clientX,
      'y': e.clientY,
      'button': this._getButton(e)
    });
  };
  
  this.onwheel = function(e) {
    // Calculate new zoom
    var zoomSpeed = 0.05;
    var minZoom = 0.05;
    var maxZoom = 1;
    if (e.deltaY !== 0)
      this.zoom += (e.deltaY < 0 ? 1 : -1) * zoomSpeed;
    if (this.zoom < minZoom)
      this.zoom = minZoom;
    if (this.zoom > maxZoom)
      this.zoom = maxZoom;
    
    this._pushUniqueEvent('zoomUpdate', {'zoom': this.zoom});
  };
  
  // Internal utils
  
  // Return whether the mouse is down
  this._isDown = function(event) {
    return event.buttons !== 0;
  };
  
  // Return the button type
  this._getButton = function(event) {
    switch(event.buttons) {
      case 1:
        return 1; // Left
      case 4:
        return 2; // Middle
      case 2:
        return 3; // Right
      default:
        return 0;  // None
    }
  };
  
  // Push a new event to event cache
  this._pushEvent = function(type, eventData) {
    this.eventCache.push({
      'type': type,
      'data': eventData
    });
  };
  
  // Replace or add a new event (by type) to make it unique
  this._pushUniqueEvent = function(type, data) {
    var found = false;
    
    for (var i = 0; i < this.eventCache.length; i++) {
      if (this.eventCache[i].type === type) {
        // After we found it, we remove all others of this type
        if (found) {
          this._removeEventByIndex(i);
        } else {
          this.eventCache[i].data = data;
          found = true;
        }
      }
    }
    if (!found) {
      this._pushEvent(type, data);
    }
  }
  
  // Remove event by event index
  this._removeEventByIndex = function(index) {
    this.eventCache.splice(index, 1);
  }
};
