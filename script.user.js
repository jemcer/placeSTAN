// ==UserScript==
// @name         r/placeDE Template - Kopie
// @namespace    http://tampermonkey.net/
// @version      8.6.0
// @description  try to take over the canvas!
// @author       placeDE Devs + jem
// @match        https://garlic-bread.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @updateURL    https://test.heystan.de/pixel/script.user.js
// @downloadURL  https://test.heystan.de/pixel/script.user.js
// ==/UserScript==

const position = { x: 1500 + 620, y: 1000 + 497 };
const dimensions = { width: 29, height: 26 };

const img = document.createElement('img');
img.style = `position: absolute; left: ${position.x}px; top: ${position.y}px; image-rendering: pixelated; width: ${dimensions.width}px; height: ${dimensions.height}px; pointer-events: none;`;

function appendImage() {
  const container = document
    .querySelector('garlic-bread-embed')
    .shadowRoot.querySelector('div.layout')
    .querySelector('garlic-bread-canvas')
    .shadowRoot.querySelector('div.container');

  container.appendChild(img);

  updateImage();
}

function updateImage() {
  const url = `https://test.heystan.de/pixel/overlay.png`;
  img.src = url + '?' + Date.now();
}

if (window.top !== window.self) window.addEventListener('load', appendImage, false);
setInterval(updateImage, 30 * 1000);
