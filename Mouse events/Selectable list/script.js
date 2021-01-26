window.addEventListener('DOMContentLoaded', () => {
        let count = 0;
        document.addEventListener('click', e => {
            if(!e.target.dataset.li)
                return;
            if(e.ctrlKey){
                if(!e.target.classList.contains('colored')){
                    e.target.setAttribute('class', 'colored');
                } else if(e.target.classList.contains('colored')){
                    e.target.removeAttribute('class')
                }
            } else {
                const list = document.querySelectorAll('li');
            for (const li of list) {
                if(li.classList.contains('colored')){
                    li.removeAttribute('class');
                }
            }
            e.target.setAttribute('class', 'colored');
            }
        })
}); 

