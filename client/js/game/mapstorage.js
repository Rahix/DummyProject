/*
 * That's how map MapStorage saves data:
 * this.map = {
 *   'x-ayis': {
 *     'y-axis': chunk-data
 *   }
 * }
 */

var MapStorage = function() {
  this.init();
};

MapStorage.prototype = {
  // Init map storage with an empty map.
  init: function() {
    this.map = {};
  },
  
  // Return the chunk data of a position.
  getChunk: function(x, y) {
    if (this._isChunk(x, y)) {
      return this.map[x][y];
    } else {
      return null;
    }
  },
  
  // Set the chunk data at a specific position.
  setChunk: function(x, y, chunk) {
    if (typeof this.map[x] === 'undefined') {
      this.map[x] = {};
    }
    
    this.map[x][y] = chunk;
  },
  
  // Internals
  
  // Return whether there is a chunk at that position.
  _isChunk: function(x, y) {
    if (typeof this.map[x] !== 'undefined')
      return typeof this.map[x][y] !== 'undefined';
    return false;
  }
}