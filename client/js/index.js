// Wait until document is ready, then set event handlers (in fn 'documentReady').
// Before that NO code should be executed.
document.addEventListener('DOMContentLoaded', documentReady);

function documentReady() {
  // Fullscreen events
  //elementID('fullscreen-btn').onclick = toggleFullscreen;
  document.fullscreenError = fullscreenError;

  elementID("main-canvas").onresize = updateSize;
  updateSize();

  // Start game's main
  main();
}

function updateSize()
{
    elementID("main-canvas").width = elementID("main-canvas").offsetWidth;
    elementID("main-canvas").height = elementID("main-canvas").offsetHeight;
}
