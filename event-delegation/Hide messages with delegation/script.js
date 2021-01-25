window.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('click', e => {
        if(e.target.dataset.div !== undefined){
            let closestDiv = e.target.closest('div');
            closestDiv.hidden = true;
        }
    })
})