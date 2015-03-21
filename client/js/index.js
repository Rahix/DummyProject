// Wait until document is ready, then set event handlers (in fn 'documentReady').
// Before that NO code should be executed.
document.addEventListener('DOMContentLoaded', documentReady);

function documentReady() {
  // Fullscreen events
  //elementID('fullscreen-btn').onclick = toggleFullscreen;
  document.fullscreenError = fullscreenError;
  
  // Start game's main
  main();
}