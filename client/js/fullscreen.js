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