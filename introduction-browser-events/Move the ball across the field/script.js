window.addEventListener('DOMContentLoaded', () => {
    const ball = document.getElementById('ball');
    const field = document.getElementById('field');
    field.addEventListener('click', event => {
        const x = event.clientX;
        const y = event.clientY;
        console.log(x, y);
        ball.style.transform = `translate(${x}px, ${y}px)`;
    })  
})
