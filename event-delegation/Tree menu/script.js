window.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('click', e => {
        let id = e.target.dataset.toggleId;
        if(!e.target.dataset.toggleId)
            return;
        e.target.classList.add('change');
        let ul = document.getElementById(id);
        if(ul.hidden){
            ul.hidden = false;
        } else ul.hidden = true;
    })
})