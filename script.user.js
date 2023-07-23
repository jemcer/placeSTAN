// ==UserScript==
// @name         r/placeDE Template - Kopie
// @namespace    http://tampermonkey.net/
// @version      8.4.4
// @description  try to take over the canvas!
// @author       placeDE Devs
// @match        https://garlic-bread.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @updateURL    https://github.com/jemcer/placeSTAN/raw/main/script.user.js
// @downloadURL  https://github.com/jemcer/placeSTAN/raw/main/script.user.js
// ==/UserScript==

const overlayImage = document.createElement('img');
overlayImage.style = `position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 2000px;height: 2000px;pointerEvents: 'none';`;

function updateImage() {
  const img_url = `https://raw.githubusercontent.com/jemcer/placeSTAN/main/overlay_target.png`;
  overlayImage.src = img_url + '?' + Date.now();
}

if (window.top !== window.self) {
  window.addEventListener(
    'load',
    () => {
      const canvasContainer = document
        .querySelector('garlic-bread-embed')
        .shadowRoot.querySelector('div.layout')
        .querySelector('garlic-bread-canvas')
        .shadowRoot.querySelector('div.container');

      canvasContainer.appendChild(overlayImage);

      updateImage();
    },
    false
  );
}

setInterval(updateImage, 30000);
