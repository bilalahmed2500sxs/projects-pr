const btnEl = document.querySelector('.btn');

btnEl.addEventListener('mouseover',(event)=>{
    const x = event.pageX - btnEl.offsetleft;
    const y = event.pageY - btnEl.offsetTop;

    btnEl.style.setProperty("--xPos", x + 'px');
    btnEl.style.setProperty('--ypos', y + 'px');
});