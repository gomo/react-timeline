export function closest(elem, selector) {
  var matchesFn;

  // find vendor prefix
  ['matches','webkitMatchesSelector','mozMatchesSelector','msMatchesSelector','oMatchesSelector'].some(function(fn) {
      if (typeof document.body[fn] == 'function') {
          matchesFn = fn;
          return true;
      }
      return false;
  })

  var parent;

  // traverse parents
  while (elem) {
      parent = elem.parentElement;
      if (parent && parent[matchesFn](selector)) {
          return parent;
      }
      elem = parent;
  }

  return null;
}