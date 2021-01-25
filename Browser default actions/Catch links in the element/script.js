window.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a');
    for (const link of links) {
        link.addEventListener('click', event => {
           let choice = confirm('Do you really want to go?')
           if(choice === false)
            event.preventDefault();
        });

    }
})
