// This file contains the render engine

function RenderEngine(canvas)
{
    this.canvas = canvas;
    this.cctx = canvas.getContext("2d");

    this.render = function(zoom, focus_coords, map_storage)
    {
        //Calculate what chunk is in the mid:
        var chunk = map_storage.getChunk(
            Math.floor(focus_coords[1]),
            Math.floor(focus_coords[0])
            );
        var chunkX = this.canvas.width/2 - iso_util.to_isometric_x(focus_coords[0]*16,focus_coords[1]*16, zoom);
        var chunkY = this.canvas.height/2 - iso_util.to_isometric_y(focus_coords[0]*16,focus_coords[1]*16, zoom);
        // Done center chunk. Calculate visible chunks
        var y;
        var x;
        for(y=-2;y<3;y++)
        {
            for(x=-2;x<3;x++)
            {
                var chunk = map_storage.getChunk(
                    Math.floor(focus_coords[1])+y,
                    Math.floor(focus_coords[0])+x
                    );
                var cX = iso_util.to_isometric_x(x*16, y*16, zoom) + chunkX;
                var cY = iso_util.to_isometric_y(x*16, y*16, zoom) + chunkY;
                if(chunk != null)
                  this.render_chunk(chunk, cX, cY, zoom);
            }
        }
        this.render_chunk(chunk, chunkX, chunkY, zoom);
    }

    // Render a chunk (16, 16)
    this.render_chunk = function(chunk, x, y, zoom)
    {
        var iX;
        var iY;
        for(iY = 0; iY < 16; iY ++)
        {
            for(iX = 0; iX < 16;iX++)
            {
                var xCalc;
                var yCalc;
                var xTile;
                var yTile;

                xCalc = iso_util.to_isometric_img_x(iX, iY, zoom) + x;
                yCalc = iso_util.to_isometric_img_y(iX, iY, zoom) + y;
                yCalc = yCalc - ( chunk.data[iY][iX].height * 40 * zoom);

                xTile = (chunk.data[iY][iX].ground % 16) * 256;
                yTile = Math.floor(chunk.data[iY][iX].ground / 16) * 256;
                this.cctx.drawImage(groundset,
                                    xTile,
                                    yTile,
                                    iso_util.tile_scale,
                                    iso_util.tile_scale,
                                    xCalc,
                                    yCalc,
                                    iso_util.tile_scale*zoom,
                                    iso_util.tile_scale*zoom);
                xTile = (chunk.data[iY][iX].build % 16) * 256;
                yTile = Math.floor(chunk.data[iY][iX].build / 16) * 256;
                this.cctx.drawImage(buildingset,
                                    xTile,
                                    yTile,
                                    iso_util.tile_scale,
                                    iso_util.tile_scale,
                                    xCalc,
                                    yCalc,
                                    iso_util.tile_scale*zoom,
                                    iso_util.tile_scale*zoom);
            }
        }
    }
}
