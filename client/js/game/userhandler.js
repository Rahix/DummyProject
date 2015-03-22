/*
 * Eventnames of UserHandler + Event attributes:
 * 'mouseClick': Fired when the user clicked (without moving the mouse).
 *   {
 *     'x': Absolute X-Position of mouse
 *     'y': Absolute Y-Position of mouse
 *     'button': 1=LeftClick 2=RightClick 3=Middle
 *   }
 * 'mouseDown': Fired when the user presses any mous buttons.
 *   {
 *     'x': Absolute X-Position of mouse
 *     'y': Absolute Y-Position of mouse
 *     'button': 1=LeftClick 2=RightClick 3=Middle
 *   }
 * 'mouseMove': Fired when the user moves the PRESSED mouse.
 *   {
 *     'x': Absolute X-Position of mouse after move
 *     'y': Absolute Y-Position of mouse after move
 *     'deltaX': Relative X-Movement
 *     'deltaY': Relative Y-Movement
 *     'button': 1=LeftClick 2=RightClick 3=Middle
 *   }
 * 'mouseUp': Fired when the user releases any mous buttons.
 *   {
 *     'x': Absolute X-Position of mouse
 *     'y': Absolute Y-Position of mouse
 *     'button': 1=LeftClick 2=RightClick 3=Middle
 *   }
 * 'zoomUpdate': Fired when the zoom was updated.
 *   {
 *     'zoom': Zoom position from 0 (out) to 1 (in)
 *   }
 */

function UserHandler() {
  this.eventCache = [];
  
  this.zoom = 0.5;
  
  // Assign all events to it. Now it can start working.
  this.assignEvents = function() {
    var self = this;  // To avoid recursion
    var canvas = elementID('main-canvas');
    canvas.onmousedown = function(e) { self.onmousedown(e) };
    canvas.onmousemove = function(e) { self.onmousemove(e) };
    canvas.onmouseup = function(e) { self.onmouseup(e) };
    canvas.onwheel = function(e) { self.onwheel(e) };
  };
  
  // Get next event by FIFO principle. It will be removed.
  this.getNextEvent = function() {
    if (this.eventCache.length > 0) {
      var event = this.eventCache[0];
      this._removeEventByIndex(0);
      return event;
    } else {
      return {type: 'none', data: {}};
    }
  }
  
  // Internal event handler
  
  this.onmousedown = function(e) {
    console.log(this);
  };
  
  this.onmousemove = function(e) {
    // We only handle move if mouse is pressed.
    if (this._isDown(e)) {
      
    }
  };
  
  this.onmouseup = function(e) {
    console.log(e);
  };
  
  this.onwheel = function(e) {
    // Calculate new zoom
    var zoomSpeed = 0.05;
    if (e.deltaY !== 0)
      this.zoom += (e.deltaY < 0 ? -1 : 1) * zoomSpeed;
    
    // If there is already a zoom event,
    // don't create a new one; recreate it
    this._removeEventsByType('zoomUpdate');
    this._pushEvent('zoomUpdate', {'zoom': this.zoom});
    
    console.log(this.zoom);
    console.log(this.eventCache);
  };
  
  // Internal utils
  
  // Return whether the mouse is down
  this._isDown = function(event) {
    return event.buttons !== 0;
  };
  
  // Push a new event to event cache
  this._pushEvent = function(type, eventData) {
    this.eventCache.push({
      'type': type,
      'data': eventData
    });
  };
  
  // Remove event by event index
  this._removeEventByIndex = function(index) {
    this.eventCache.splice(index, 1);
  }
  
  // Remove all events of this type
  this._removeEventsByType = function(type) {
    for (var i = 0; i < this.eventCache.length; i++) {
      if (this.eventCache[i].type === type) {
        this._removeEventByIndex(i);
      }
    }
  }
};