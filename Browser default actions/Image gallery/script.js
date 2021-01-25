window.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a');
    for (const link of links) {
        link.addEventListener('click', event => {
            event.preventDefault();
            const mainPhoto = document.getElementById('largeImg')
            const mainPhotoSrc = mainPhoto.src;
            mainPhoto.src = link.href;
        })
    }
})