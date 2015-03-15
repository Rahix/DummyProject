// Utility functions

// A simpler way to get elements by id
function elementID(id) {
  return document.getElementById(id);
}

// Detect mobile browser. This should work for the most browsers.
function isMobile() {
  return /mobi/i.test(navigator.userAgent);
}
