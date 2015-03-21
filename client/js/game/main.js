// This get automatically called
var map_storage;
var render_engine;
var canvas;

function main() {
    map_storage = MapStorage();
    render_engine = RenderEngine();
    canvas = elementID("main-canvas");
    setInterval(game_loop, 1/30);
}

function game_loop() {
    render_engine.render(1, [8, 8], map_storage);
}
