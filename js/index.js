// Your code goes here

const nav = document.querySelector(".nav-container")
const logoHead = nav.querySelector(".logo-heading")
const destinationDivs = document.querySelectorAll(".destination")
const button = document.querySelectorAll(".btn")


document.addEventListener('keydown', function () {
    logoHead.classList.add("flippy")
})

document.addEventListener('keyup', function () {
    logoHead.classList.remove("flippy")
})

document.addEventListener('copy', (event) => {
    const pagelink = `\n\nCopied from Fun Bus`;
    event.clipboardData.setData('text', document.getSelection() + pagelink);
    event.preventDefault();
  });

destinationDivs.forEach((item) => {
    item.addEventListener('mouseenter', () => {
        item.classList.add("flippy")
    })
    item.addEventListener('mouseleave', () => {
        item.classList.remove("flippy")
    })
    item.addEventListener('click', (event) => {
        let title = item.querySelector("h4").innerText
        alert(`You've clicked on ${title}`)
    })
})

button.forEach((item) => {
    item.addEventListener('click', (event) => {
        alert(`You've clicked on a button inside of a div`)
        event.stopPropagation()
    })
})

window.addEventListener('resize', () => {
    console.log(window.innerWidth)
})

window.addEventListener('scroll', () => {
    console.log(window.scrollY)
})
document.addEventListener('keypress', (event) => {
    console.log(event["code"])
})
window.addEventListener('pagehide', () => {
    alert("huh")
})
document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
  });