window.addEventListener('scroll', e =>{
    document.documentElement.style.setProperty(
        '--scrollTop', `${this.screenY}px`)
})
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
	wrapper: '.wrapper',
	content: '.content'
})
 