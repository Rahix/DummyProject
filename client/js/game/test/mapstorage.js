var assert = require('assert');

var fs = require('fs');
var vm = require('vm');
var path = 'js/game/mapstorage.js';

var code = fs.readFileSync(path);
vm.runInThisContext(code);

describe('MapStorage', function(){
  var mapstorage, testchunk;
  
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
  
  describe('#init', function(){
    it('should init a new and empty map.', function(){
      mapstorage.init();
      assert.equal(typeof mapstorage.map[0], 'undefined');
    });
  });
  
  describe('#_isChunk', function(){
    it('should return false if the chunk does not exist.', function(){
      assert.equal(mapstorage._isChunk(10, 10), false);
      assert.equal(mapstorage._isChunk(-1, 0), false);
      assert.equal(mapstorage._isChunk(0, 4), false);
    });
    
    it('should return true if the chunk exists.', function(){
      assert.equal(mapstorage._isChunk(0, 0), true);
    });
  });
  
  describe('#getChunk', function(){
    it('should return the chunk data if it exists.', function(){
      assert.equal(mapstorage.getChunk(0, 0), testchunk);
    });
    
    it('should return null if the chunk does not exist.', function(){
      assert.equal(mapstorage.getChunk(-1, 1), null);
    });
  });
  
  describe('#setChunk', function(){
    it('should update existing chunks.', function(){
      var updatedChunk = {a: 'b'};
      mapstorage.setChunk(0, 0, updatedChunk);
      assert.equal(mapstorage.map[0][0], updatedChunk);
    });
    
    it('should create chunks if they don\'t exist.', function(){
      mapstorage.setChunk(-2, 2, testchunk);
      assert.equal(mapstorage.map[-2][2], testchunk);
    });
  });
})