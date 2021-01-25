window.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('button');
    
    function alert1(){
        alert('1');
    }

    button.addEventListener('click', alert1);
    button.removeEventListener('click', alert1);
    button.addEventListener('click', () => alert('2'));
});
