// This get automatically called
var map_storage;
var render_engine;
var canvas;
var test_data = {
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
                "build": 14
            },
            {
                "height": 0,
                "ground": 1,
                "build": 14
            },
            {
                "height": 0,
                "ground": 1,
                "build": 14
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
                "ground": 0,
                "build": 0
            },
            {
                "height": 0,
                "ground": 0,
                "build": 0
            },
            {
                "height": 0,
                "ground": 4,
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
                "ground": 0,
                "build": 0
            },
            {
                "height": 0,
                "ground": 4,
                "build": 0
            },
            {
                "height": 0,
                "ground": 8,
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
                "ground": 0,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 0
            },
            {
                "height": 0,
                "ground": 0,
                "build": 0
            },
            {
                "height": 0,
                "ground": 1,
                "build": 1
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
                "ground": 4,
                "build": 0
            },
            {
                "height": 0,
                "ground": 8,
                "build": 0
            },
            {
                "height": 1,
                "ground": 0,
                "build": 15
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
                "build": 2
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
                "ground": 5,
                "build": 0
            },
            {
                "height": 0,
                "ground": 9,
                "build": 0
            },
            {
                "height": 0,
                "ground": 6,
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
                "ground": 0,
                "build": 0
            },
            {
                "height": 0,
                "ground": 5,
                "build": 0
            },
            {
                "height": 0,
                "ground": 2,
                "build": 0
            }
        ]
    ]
};

function main() {
    map_storage = new MapStorage();
    map_storage.setChunk(0,0,test_data)
    canvas = elementID("main-canvas");
    render_engine = new RenderEngine(canvas);
    setInterval(game_loop, 1000);
}

function game_loop() {
    render_engine.render(.5, [8, 8], map_storage);
}
