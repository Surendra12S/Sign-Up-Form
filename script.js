
const contantBtns = document.getElementById('contantBtn');
const contants = document.getElementById('content');
const closeform = document.getElementById('closeForm');
contantBtns.addEventListener('click',()=>{
    contants.style.display = 'flex';
});

closeform.addEventListener('click',()=>{
    contants.style.display = 'none';
});

window.addEventListener('click',(event)=>{
    if(event.target === contants){
        contants.style.display = 'none';
    }
});