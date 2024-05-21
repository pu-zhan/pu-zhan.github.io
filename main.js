let domDefault = document.getElementById("default")
let domPink = document.getElementById("pink")
let domBlack = document.getElementById("black")

let a=1
domDefault.addEventListener('click', () => {
  document.body.setAttribute('theme-mode', '')
})
domPink.addEventListener('click', () => {
  document.body.setAttribute('theme-mode', 'pink')
})
domBlack.addEventListener('click', () => {
  document.body.setAttribute('theme-mode', 'black')
})
