window.addEventListener('DOMContentLoaded', () => {
    const deleteButton = document.querySelectorAll('button');
    for (const item of deleteButton) {
        item.addEventListener('click', () => item.parentElement.hidden = true)
    }
});