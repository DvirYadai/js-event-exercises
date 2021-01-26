window.addEventListener('DOMContentLoaded', () => {
    const ball = document.getElementById('ball');
    const field = document.getElementById('field');
    const ballHeight = ball.clientHeight;
    const ballWidth = ball.clientWidth;
    const fieldCoordinates = field.getBoundingClientRect();
    let fieldLeft;
    let fieldTop;
    field.addEventListener('click', event => {
        fieldLeft = event.clientX - fieldCoordinates.left;
        fieldTop = event.clientY - fieldCoordinates.top;
        let ballTop = fieldTop - ballHeight/2;
        let ballLeft = fieldLeft - ballWidth/2;
        ball.style.top = `${ballTop}px`;
        ball.style.left = `${ballLeft}px`;
        if (ballTop < 0) {
            ball.style.top = `${0}px`;
        }
        if (ballLeft < 0) {
            ball.style.left = `${0}px`;
        }
        console.log(fieldCoordinates.right + ' ' + ballLeft + ' ' + ballWidth + ' ' + fieldCoordinates.left)
        if ((ballLeft + fieldCoordinates.left + ballWidth) > fieldCoordinates.right) {
            ball.style.left = `${ballLeft - ballWidth/2}px`;
        }
        if ((ballTop + fieldCoordinates.top + ballWidth) > fieldCoordinates.bottom) {
            ball.style.top = `${ballTop - ballWidth/2}px`;
        }
    })  
})
