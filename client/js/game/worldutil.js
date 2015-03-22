//This file contains a lot of functions for calculationg to and from isometric directions

var iso_util = {
    tile_scale: 256,
    to_isometric_img_x: function(x, y, zoom) {
        return ( (x - y) * (this.tile_scale / 2) - this.tile_scale ) * zoom;
    },
    to_isometric_img_y: function(x, y, zoom) {
        return ( (x + y) * (this.tile_scale / 4) - (this.tile_scale / 2 ) ) * zoom;
    },
    to_isometric_x: function(x, y, zoom) {
        return ( (x - y) * (this.tile_scale / 2) ) * zoom;
    },
    to_isometric_y: function(x, y, zoom) {
        return ( (x + y) * (this.tile_scale / 4) ) * zoom;
    }
}
