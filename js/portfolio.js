import { backToNormal } from './backToNormal.js';
import { clickCard } from './clickCardPortfolio.js';

document.getElementById('menuIcon').addEventListener('click', () => {

    document.getElementById('navMobile').classList.toggle('menu-hidden');

});

document.getElementById('blackoutCover').addEventListener('click', backToNormal);
document.getElementById('closeIconSvg').addEventListener('click', backToNormal);

const cards = document.getElementsByClassName('card');

for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', clickCard);
}



