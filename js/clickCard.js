import { grooveboxInfo } from "../infoTexts/grooveboxInfo.js";
import { ekholmsnasInfo } from '../infoTexts/ekholmsnasInfo.js';
import { tinyGrandInfo } from "../infoTexts/tinyGrandInfo.js";
import { clickScreenshot } from "./clickScreenshot.js";

export const clickCard = (e) => {

    e.target.style.transform = 'none';
    document.getElementById('popup').style.visibility = 'visible';
    document.getElementById('blackoutCover').style.visibility = 'visible';

    let info;

    switch (e.target.id) {

        case 'webGrooveboxThumb':
            info = grooveboxInfo;
            break;

        case 'ekholmsnasThumb':
            info = ekholmsnasInfo;
            break;

        case 'tinyGrandPrixThumb':
            info = tinyGrandInfo;
            break;

    }
    document.getElementById('popupTitle').innerHTML = info.title;
    document.getElementById('popupText').innerHTML = info.text;

    let links = ``;

    info.links.forEach(link => {
        const item = `<li><a href="${link.link}" target="_blank">${link.title}</li>`;
        links += item;
    });

    document.getElementById('popupLinks').innerHTML = links;

    let tech = ``;

    info.tech.forEach(techItem => {
        const item = `<li>${techItem}</li>`;
        tech += item;
    });

    document.getElementById('popupTech').innerHTML = tech;

    let screenshots = ``;

    for (let i = 0; i < info.screenshots.length; i++) {

        const item = `<div class="popup-screenshot-thumb" id="popupScreenshotThumb${i}" style="background-image: url(${info.screenshots[i].thumb})"></div>`;
        screenshots += item;

    }

    document.getElementById('popupScreenshots').innerHTML = screenshots;

    for (let i = 0; i < info.screenshots.length; i++) {

        document.getElementById(`popupScreenshotThumb${i}`).addEventListener('click', () => {
            clickScreenshot(info.screenshots[i].large);
        })

    }

}