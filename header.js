document.addEventListener('click', (e) => {
    if(e.target.classList.contains('rocket')){
        document.getElementsByTagName('header')[0].classList.toggle('hidden');
    }

    if(e.target.classList.contains('about')){
        document.getElementById('home').classList.add('hidden');
        document.getElementById('about-me').classList.remove('hidden');
        document.getElementsByTagName('header')[0].classList.add('hidden');
    }

    if(e.target.classList.contains('bb8')){
        document.getElementById('about-me').classList.add('hidden');
        document.getElementById('home').classList.remove('hidden');
        document.getElementsByTagName('header')[0].classList.add('hidden');
    }
})