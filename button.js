(function(){
  var s = document.querySelector('script[api_key][user]');
  var a = s.getAttribute('api_key');
  var u = s.getAttribute('user');
  document.write('<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/pulzzedongyeon/jsdelivr-test@master/button.css" />');
  document.write('<script src="https://cdn.jsdelivr.net/gh/pulzzedongyeon/jsdelivr-test@master/to.js"></script>');
  document.write(`<div id="interactor-go-button" onclick="interactor_go({"api_key":"${a}","user":"${u}"});">Automation</div>`);
})();