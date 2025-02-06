(function () {
  'use strict';

  var html = "<!-- button.html -->\n<button class=\"my-button\">Click me!</button>";

  function initButton(body) {
    body.innerHTML += html;
  }

  const body = document.body;
  initButton(body);

})();
