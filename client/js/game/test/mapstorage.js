var assert = require('assert');

var fs = require('fs');
var vm = require('vm');
var path = 'js/game/mapstorage.js';

var code = fs.readFileSync(path);
vm.runInThisContext(code);

describe('MapStorage', function(){
  var mapstorage, testchunk;
  
  describe('#_isChunk', function(){
    beforeEach(function() {
      mapstorage = new MapStorage();
      testchunk = {bla: 1};
      
      // MapStorage has only one chunk at 0/0 here.
      // To avoid problems we 'hack' that data into it.
      //mapstorage.setChunk(0,0,testchunk);
      
      mapstorage.map = {0: {0: testchunk}};
    });
    
    afterEach(function() {
      mapstorage = undefined;
      testchunk = undefined;
    });
    
    it('should return false if the chunk does not exist.', function(){
      assert.equal(mapstorage._isChunk(10, 10), false);
      assert.equal(mapstorage._isChunk(-1, 0), false);
      assert.equal(mapstorage._isChunk(0, 4), false);
    });
    
    it('should return true if the chunk exists.', function(){
      assert.equal(mapstorage._isChunk(0, 0), true);
    });
  });
})