window.addEventListener('DOMContentLoaded', () => {
    const hider = document.getElementById("hider");
    const text = document.getElementById("text");
    hider.addEventListener('click', () => text.innerText = '');
})

