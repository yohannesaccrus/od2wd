let navbar = document.querySelector('nav')

window.onscroll = () => {
	if (window.pageYOffset > 0) {
		navbar.classList.add('scrolled')
	} else {
		navbar.classList.remove('scrolled')
	}
}

toggleNav = () => {
	let navbar = document.getElementById("nav")
	navbar.classList.toggle('show')
	let buttonicon = document.getElementById("button")
	buttonicon.classList.toggle('toggle')
	let logo = document.getElementById("logo")
	logo.classList.toggle('toggle')
}

convert = () => {
	window.location.href = "index.html#form"
}
