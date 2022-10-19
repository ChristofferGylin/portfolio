import { backToPopup } from "./backToPopup.js";

export const clickScreenshot = (path) => {
    console.log(path);

    const closeIcon = `<div class="popup-close-container" id="closeIconSvgScreenshot"><div class="popup-close-icon-screenshot"><svg class="close-icon-svg" id="closeIconScreenshotSvg" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 90">
    <line class="close-icon-line" x1="11.609" y1="6.109" x2="89.391" y2="83.891" />
    <line class="close-icon-line" x1="89.391" y1="6.109" x2="11.609" y2="83.891" />
</svg></div></div>`

    const html = `${closeIcon}<img src="${path}">`;
    const screenshotContainer = document.getElementById('screenshotContainer');

    screenshotContainer.innerHTML = html;
    screenshotContainer.style.visibility = 'visible';
    document.getElementById('closeIconSvgScreenshot').addEventListener('click', backToPopup);
    document.getElementById('blackoutCover').style.visibility = 'hidden';
    document.getElementById('blackoutCoverScreenshot').style.visibility = 'visible';

}