window.addEventListener('DOMContentLoaded', () => {
    
    document.addEventListener('mouseover', e => {
        if(!e.target.dataset.tooltip)
            return;
        const newTooltip = document.createElement('div');
        newTooltip.innerHTML = e.target.dataset.tooltip;
        e.target.appendChild(newTooltip);
        if(e.target.dataset.tooltip === 'HTML<br>tooltip'){
            newTooltip.setAttribute('class', 'tool-tip');
        } else newTooltip.setAttribute('class', 'tool-tip2');
    });

    document.addEventListener('mouseout', e => {
        if(!e.target.dataset.tooltip)
            return;
        e.target.removeChild(e.target.lastChild);
    })

})