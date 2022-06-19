document.addEventListener('click', (e) => {
    if(e.target.classList.contains('rocket')){
        document.getElementsByTagName('header')[0].classList.toggle('hidden');
    }
})