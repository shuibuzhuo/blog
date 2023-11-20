(function (global, handle) {
  var scores = [90, 95, 88, 35, 55, 91];

  global.__Module = {
    scores,
    handle,
  };
})(window, window.__Module_HANDLE);

const module = window.__Module;
console.log(module.handle.average(module.scores));
console.log(module.handle.fail(module.scores));
