document.addEventListener('click', (e) => {
    console.log(e.target.classList)
    if(e.target.classList.contains('rocket')){
        console.log('g')
    }
})