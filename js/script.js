window.addEventListener('scroll', e =>{
    document.documentElement.style.setProperty(
        '--scrollTop', `${this.screenY}px`)
})