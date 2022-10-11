import { grooveboxInfo } from "../infoTexts/grooveboxInfo.js";
import { ekholmsnasInfo } from '../infoTexts/ekholmsnasInfo.js';
import { tinyGrandInfo } from "../infoTexts/tinyGrandInfo.js";

export const clickCard = (e) => {

    e.target.style.transform = 'none';
    document.getElementById('infoContainer').style.visibility = 'visible';
    document.getElementById('blackoutCover').style.visibility = 'visible';
    
    
    let info;
    console.log(e.target.id)

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
    document.getElementById('infoBox').innerHTML = 
    `<h3>${info.title}</h3><p>${info.text}</p>`;

}