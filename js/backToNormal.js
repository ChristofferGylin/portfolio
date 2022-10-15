export const backToNormal = () => {

    document.getElementById('popup').style.visibility = 'hidden';
    document.getElementById('blackoutCover').style.visibility = 'hidden';

    const cards = document.getElementsByClassName('card');

    for (let i = 0; i < cards.length; i++) {

        cards[i].removeAttribute('style');

    }

}