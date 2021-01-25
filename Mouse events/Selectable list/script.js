window.addEventListener('DOMContentLoaded', () => {
        let count = 0;
        document.addEventListener('click', e => {
            if(!e.target.dataset.li)
                return;
            if(count < 1){
                e.target.setAttribute('class', 'colored');
                count++;
            } else {
                const colored = document.querySelector('.colored');
                colored.classList.remove('colored');
                e.target.setAttribute('class', 'colored');
            }
            if(e.ctrlKey){
                if(e.target.classList.contains('colored')){
                    const colored = document.querySelector('.colored');
                    colored.classList.remove('colored');
                    count = 0;
                } else {
                    e.target.setAttribute('class', 'colored');
                }
            }
            
        })
}); 