// This file contains the render engine

function RenderEngine(canvas)
{
    this.canvas = canvas;
    this.cctx = canvas.getContext("2d");

    this.render = function(zoom, focus_coords, map_storage)
    {
        render_chunk(map_storage.getChunk(0, 0), 0, 0);
    }

    // Render a chunk (16, 16)
    this.render_chunk = function(chunk, x, y)
    {
        
    }
}
