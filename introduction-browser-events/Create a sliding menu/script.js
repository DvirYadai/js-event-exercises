window.addEventListener('DOMContentLoaded', () => {
    const close = document.getElementById('close');
    const open = document.getElementById('open');
    const list = document.getElementById('list');
    open.hidden = true;
    open.style.cursor = ('pointer');
    close.style.cursor = ('pointer');
    list.hidden = true;
    close.addEventListener('click', () => {
        close.hidden = true;
        open.hidden = false;
        list.hidden = false;
    });

    open.addEventListener('click', () => {
        close.hidden = false;
        open.hidden = true;
        list.hidden = true;
    });
});