let pixels = document.querySelector('.pixels')
document.onmousemove = function () {
   document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeend', '<img src = "img/logos/submarine.png" id = "heart" > ')
   let heart = document.querySelector('#heart');
   heart.style.position = "fixed";
   document.onmousemove = function (event) {

      heart.style.left = event.clientX + 20 + 'px';
      heart.style.top = event.clientY + 20 + 'px';
      pixels.innerHTML = event.clientX + 'px' + ' ' + event.clientY + 'px'

   }

}


let clas = document.querySelectorAll(".footer__flex a")
for (let i = 0; i < clas.length; i++) {
   clas[i].addEventListener("click", function (event) {
      event.preventDefault()
   })
}


let about = document.querySelector(".paul__flex_right")
about.insertAdjacentHTML("beforeend", "<button class='beatles'>Про Битлз</button>")
let btn = document.querySelector(".beatles")
btn.classList.add("button")

setTimeout(() => {
   btn.insertAdjacentHTML("afterend", "<a href='https://ru.wikipedia.org/wiki/%D0%9B%D0%B5%D0%BD%D0%BD%D0%BE%D0%BD,_%D0%94%D0%B6%D0%BE%D0%BD' target='_blank'><div class='john disable'><p>читайте о Джоне Ленноне</p></div></a>")
   let john = document.querySelector(".john")
   john.insertAdjacentHTML("afterend", "<a href='https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BA%D0%BA%D0%B0%D1%80%D1%82%D0%BD%D0%B8,_%D0%9F%D0%BE%D0%BB' target='_blank'><div class='Paul disable'><p>читайте о Поле Маккартни</p></div></a>")
   let paul = document.querySelector(".Paul")
   paul.insertAdjacentHTML("afterend", "<a href='https://ru.wikipedia.org/wiki/%D0%A0%D0%B8%D0%BD%D0%B3%D0%BE_%D0%A1%D1%82%D0%B0%D1%80%D1%80' target='_blank'><div class='Ringo disable'><p>читайте о Ринго Старр</p></div></a>")
   let ringo = document.querySelector(".Ringo")
   ringo.classList.add("Paul")
   ringo.insertAdjacentHTML("afterend", "<a href='https://ru.wikipedia.org/wiki/%D0%A5%D0%B0%D1%80%D1%80%D0%B8%D1%81%D0%BE%D0%BD,_%D0%94%D0%B6%D0%BE%D1%80%D0%B4%D0%B6' target='_blank'><div class='george disable'><p>читайте о Джордж Харрисон</p></div></a>")
   let george = document.querySelector(".george")
   george.classList.add("Paul")

}, 10);




btn.addEventListener("click", function (e) {
   let john = document.querySelector(".john").classList.toggle("disable")
   let paul = document.querySelector(".Paul").classList.toggle("disable")
   let ringo = document.querySelector(".Ringo").classList.toggle("disable")
   let george = document.querySelector(".george").classList.toggle("disable")
})

btn.addEventListener("mouseenter", function () {
   btn.style.transform = "scale(1.1)"
})

btn.style.width = "250px"
btn.style.height = "30px"
btn.style.backgroundColor = "#fabb98"
btn.style.transition = "1s"
btn.style.border = "none"
btn.style.cursor = "pointer"
btn.style.position = "relative"

btn.addEventListener("mouseleave", function () {
   btn.style.transform = "scale(1)"
})





