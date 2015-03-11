// Fullscreen related functions

function toggleFullscreen() {
  if (fullscreenEnabled()) {
    container = elementID('main-container');
    
    if (isFullscreen()) {
      fullscreenOff();
    } else {
      fullscreenOn(container);
    }
  } else {
    fullscreenError();
  }
}

function fullscreenEnabled() {
  return (document.fullscreenEnabled ||             // Standard
          document.mozFullScreenEnabled ||          // Firefox
          document.webkitFullscreenEnabled ||       // WebKit
          document.msFullscreenEnabled);            // IE
}

function isFullscreen() {
  return (document.fullscreenElement ||             // Standard
          document.mozFullScreenElement ||          // Firefox
          document.webkitFullscreenElement ||       // WebKit
          document.msFullscreenElement);            // IE
}

function fullscreenOn(container) {
  // Try to get in fullscreen mode
  if (container.requestFullscreen) {                 // Standard
    container.requestFullscreen();
  } else if (container.mozRequestFullScreen) {       // Firefox
    container.mozRequestFullScreen();
  } else if (container.webkitRequestFullscreen) {    // WebKit
    container.webkitRequestFullscreen();
  } else if (container.msRequestFullscreen) {        // IE
    container.msRequestFullscreen();
  }
}

function fullscreenOff() {
  // Exit. This is browser specific, too :(
  if (document.exitFullscreen) {                 // Standard
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {     // Firefox
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {    // WebKit
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {        // IE
    document.msExitFullscreen();
  }
}

function fullscreenError() {
  alert('Fullscreen failed.');
}
// Wait until document is ready, then set event handlers (in fn 'documentReady').
// Before that NO code should be executed.
document.addEventListener('DOMContentLoaded', documentReady);

function documentReady() {
  // Fullscreen events
  elementID('fullscreen-btn').onclick = toggleFullscreen;
  document.fullscreenError = fullscreenError;
  
  // Start game's main
  main();
}
// Utility functions

// A simpler way to get elements by id
function elementID(id) {
  return document.getElementById(id);
}
// This get automatically called
function main() {
}