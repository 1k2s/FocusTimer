let toggleMode = document.querySelector('.toggle-mode')


function toggleScreen () {
    document.documentElement.classList.toggle('dark-mode')
}

toggleMode.addEventListener('click', toggleScreen)

