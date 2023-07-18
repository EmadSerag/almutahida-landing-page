const scrollBtn =document.querySelector('.scroll-top')
const iconNav =document.querySelector('.icon-nav')
// create button scrollTop 
window.onscroll= ()=>{
	this.scrollY >= 700 ?scrollBtn.classList.add('show') :scrollBtn.classList.remove('show')
}
scrollBtn.addEventListener('click', ()=>{
	scrollTo({
		top:0,
		behavior:"smooth"
	})
})
// change Navbar icon 
addEventListener('click', ()=>{
iconNav.classList.toggle('fa-times')
})