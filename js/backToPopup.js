export const backToPopup = () => {
    document.getElementById('blackoutCoverScreenshot').style.visibility = 'hidden';
    document.getElementById('screenshotContainer').style.visibility = 'hidden';
    document.getElementById('blackoutCover').style.visibility = 'visible';
}