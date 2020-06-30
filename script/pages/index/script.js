let navbar = document.querySelector('nav')

window.onscroll = () => {
	if (window.pageYOffset > 0) {
		navbar.classList.add('scrolled')
	} else {
		navbar.classList.remove('scrolled')
	}
}

var imgArray = [
	'https://bit.ly/3enOcCE',
	'https://bit.ly/3fIwwlm',
	'https://bit.ly/312Lizi'],
	curIndex = 0
imgDuration = 5000

slideShow = () => {
	document.getElementById('slider').className += "fadeOut"
	setTimeout(function () {
		document.getElementById('slider').src = imgArray[curIndex]
		document.getElementById('slider').className = ""
	}, 1000)
	curIndex++
	if (curIndex == imgArray.length) { curIndex = 0 }
	setTimeout(slideShow, imgDuration)
}
slideShow()

toggleNav = () => {
	let navbar = document.getElementById("nav")
	navbar.classList.toggle('show')
	let buttonicon = document.getElementById("button")
	buttonicon.classList.toggle('toggle')
	let logo = document.getElementById("logo")
	logo.classList.toggle('toggle')
}

convert = () => {
	toggleNav()
	document.querySelector('.form').scrollIntoView({
		behavior: 'smooth'
	})
}

demo = () => {
	document.querySelector('.demo').scrollIntoView({
		behavior: 'smooth'
	})
}

toggleModal1 = () => {
	let modal1 = document.getElementById("modal1")
	modal1.classList.toggle('show')
}

toggleModal2 = () => {
	let modal2 = document.getElementById("modal2")
	modal2.classList.toggle('show')
}

about = () => {
	window.location.href = "about.html"
}


