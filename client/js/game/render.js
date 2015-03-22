// This file contains the render engine

function RenderEngine(canvas)
{
    this.canvas = canvas;
    this.cctx = canvas.getContext("2d");

    this.render = function(zoom, focus_coords, map_storage)
    {
        this.render_chunk(map_storage.getChunk(0, 0), this.canvas.width/2, 0, zoom);
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
