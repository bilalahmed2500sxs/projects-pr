const textareaEl = document.getElementById('textarea');

const totalcounterEl = document.querySelector('.total-counter');
const remainingcounterEl = document.querySelector('.remaining-counter');

textareaEl.addEventListener("keyup", ()=>{
        updateCounter();
});

updateCounter();

function updateCounter(){
    totalcounterEl.innerText = textareaEl.value.length;
    remainingcounterEl.innerText = textareaEl.getAttribute('maxLength') - textareaEl.value.length;
}
