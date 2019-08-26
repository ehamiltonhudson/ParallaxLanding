document.addEventListener('DOMContentLoaded', function() {

  var parallaxOne = document.getElementById('parallax-one')
  var overlayOne = document.getElementById('brazil')
  var parallaxTwo = document.getElementById('parallax-two')
  var overlayTwo = document.getElementById('northern-lights')
  var parallaxThree = document.getElementById('parallax-three')
  var overlayThree = document.getElementById('kauai')
  var parallaxFour = document.getElementById('parallax-four')
  var overlayFour = document.getElementById('dark-magma')
  var parallaxFive = document.getElementById('parallax-five')
  var overlayFive = document.getElementById('milky-way')
  var buttonUp = document.getElementById('up')
  var buttonDown = document.getElementById('down')

  // init controller
  // var controller = new ScrollMagic.Controller();

  function applyStyle(el) {
    el.style = "display: flex, flex-direction: column, justify-content: flex-end, align-content: flex-end";
  }

  console.log(buttonUp, buttonDown)

function slideTransition() {
  buttonUp.addEventListener('click', (event) => {
    event.preventDefault()
    console.log(event.target)
    console.log(document.documentElement)
  })
}

slideTransition()
  //
  function testScroll(ev) {
    if (window.pageYOffset < 2000) {
      parallaxOne.style = "visibility: visible; position: fixed";
      overlayOne.style = "display: flex, flex-direction: column, justify-content: flex-end, align-content: flex-end";
      // applyStyle(overlayOne)
      console.log('parallaxOne document.documentElement.scrollTop', document.documentElement.scrollTop)
    } else if (window.pageYOffset > 2000 && window.pageYOffset < 4000) {
      parallaxTwo.style = "visibility: visible; position: fixed";
      overlayTwo.style = " display: flex, flex-direction: column, justify-content: flex-end, align-content: flex-end";
      console.log('parallaxTwo document.documentElement.scrollTop', document.documentElement.scrollTop)
    } else if (window.pageYOffset > 4000 && window.pageYOffset < 6000) {
      parallaxThree.style = "visibility: visible; position: fixed";
      overlayThree.style = "display: flex, flex-direction: column, justify-content: flex-end, align-content: flex-end";
      console.log('parallaxThree document.documentElement.scrollTop', document.documentElement.scrollTop)
    } else if (window.pageYOffset > 6000 && window.pageYOffset < 8000) {
      parallaxFour.style = "visibility: visible; position: fixed";
      overlayFour.style = "display: flex, flex-direction: column, justify-content: flex-end, align-content: flex-end";
      console.log('parallaxFour document.documentElement.scrollTop', document.documentElement.scrollTop)
    } else if (window.pageYOffset > 8000 && window.pageYOffset < 10000) {
      parallaxFive.style = "visibility: visible; position: fixed";
      overlayFive.style = "display: flex, flex-direction: column, justify-content: flex-end, align-content: flex-end";
      console.log('parallaxFive document.documentElement.scrollTop', document.documentElement.scrollTop)
    }
  }
  window.onscroll = testScroll
  window.onScroll = testScroll()

})
