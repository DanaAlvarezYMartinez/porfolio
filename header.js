document.addEventListener('click', (e) => {
    if(e.target.classList.contains('rocket')){
        document.getElementsByTagName('header')[0].classList.toggle('hidden');
    }

    if(e.target.classList.contains('about')){
        document.getElementById('home').classList.add('hidden');
        document.getElementById('about-me').classList.remove('hidden');
        document.getElementsByTagName('header')[0].classList.add('hidden');
    }

    if(e.target.classList.contains('skills')){
        document.getElementById('home').classList.add('hidden');
        document.getElementById('skills').classList.remove('hidden');
        document.getElementsByTagName('header')[0].classList.add('hidden');
    }

    if(e.target.classList.contains('projects')){
        document.getElementById('home').classList.add('hidden');
        document.getElementById('projects').classList.remove('hidden');
        document.getElementsByTagName('header')[0].classList.add('hidden');
    }

    if(e.target.classList.contains('hobbies')){
        document.getElementById('home').classList.add('hidden');
        document.getElementById('hobbies').classList.remove('hidden');
        document.getElementsByTagName('header')[0].classList.add('hidden');
    }

    if(e.target.classList.contains('bb8')){
        document.getElementById('about-me').classList.add('hidden');
        document.getElementById('home').classList.remove('hidden');
        document.getElementsByTagName('header')[0].classList.add('hidden');
    }
})

var triggerTabList = [].slice.call(document.querySelectorAll('#myTab a'))
triggerTabList.forEach(function (triggerEl) {
  var tabTrigger = new bootstrap.Tab(triggerEl)

  triggerEl.addEventListener('click', function (event) {
    event.preventDefault()
    tabTrigger.show()
  })
})