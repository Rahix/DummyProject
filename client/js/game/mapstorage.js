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
    return {
    "position": {
        "X": 0,
        "Y": 0
    },
    "owner": "jswdhsakasdsd",
    "data": [
        [
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            }
        ],
        [
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            }
        ],
        [
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            }
        ],
        [
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            }
        ],
        [
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            }
        ],
        [
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            }
        ],
        [
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            }
        ],
        [
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            }
        ],
        [
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            }
        ],
        [
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            }
        ],
        [
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            }
        ],
        [
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            }
        ],
        [
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            }
        ],
        [
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            }
        ],
        [
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            }
        ],
        [
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            }
        ]
    ]
};
  },
  
  // Set the chunk data at a specific position.
  setChunk: function(x, y, chunk) {
    
  },
  
  // Internals
  
  // Return whether there is a chunk at that position.
  _isChunk: function(x, y) {
    
  }
}