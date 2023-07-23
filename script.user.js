// ==UserScript==
// @name         r/placeDE Template - Kopie
// @namespace    http://tampermonkey.net/
// @version      8.3
// @description  try to take over the canvas!
// @author       placeDE Devs
// @match        https://garlic-bread.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// ==/UserScript==

var overlayImage = null;
window.top !== window.self &&
  window.addEventListener(
    'load',
    () => {
      let e = document
        .querySelector('garlic-bread-embed')
        .shadowRoot.querySelector('div.layout')
        .querySelector('garlic-bread-canvas')
        .shadowRoot.querySelector('div.container');
      (overlayImage = document.createElement('img')),
        updateImage(),
        (overlayImage.style =
          "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 2000px;height: 1500px;pointerEvents: 'none';"),
        e.appendChild(overlayImage);
    },
    !1
  );
const img_url =
  'https://cdn.discordapp.com/attachments/831534229552627793/1132656928942723132/overlay_target.png';
function updateImage() {
  overlayImage.src = img_url;
}
setInterval(function () {
  overlayImage.src = img_url;
}, 3e4);
