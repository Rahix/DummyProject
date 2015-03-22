var UserHandler = function() {
  this.init();
};

UserHandler.prototype = {
  // Init empty UserHandler. This does NOT set events.
  init: function() {
    this.map = {};
  },
  
  // Assign all events to it. Now it can start working.
  assignEvents: function() {
    var canvas = elementID('main-canvas');
    canvas.onmousedown = this.onmousedown;
  },
  
  // Internal event handler
  
  onmousedown: function(e) {
    console.log('fired');
  }
}