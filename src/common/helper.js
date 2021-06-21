
export const disableBackgroundScroll = state => {
    let elem = document.getElementById(`body-section`);
    if (!!state) {
        elem.style.overflow = "hidden";
    } else {
        elem.style.overflow = 'unset';
    }
}