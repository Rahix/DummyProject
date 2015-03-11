// Wait until document is ready, then set event handlers (in fn 'documentReady').
// Before that NO code should be executed.
document.addEventListener('DOMContentLoaded', documentReady);

function documentReady() {
  // Set event handlers
  
  // Fullscreen
  elementID('fullscreen-btn').onclick = toggleFullscreen;
  document.fullscreenError = fullscreenError;
}