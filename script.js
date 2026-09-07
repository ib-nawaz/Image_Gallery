let previous = document.body.querySelector(".pre")
let next = document.body.querySelector(".next")
let pics_scroll = document.body.querySelector(".pics")
let pics = document.body.querySelectorAll(".pics img")
let buttons = document.body.querySelectorAll("button")

pics_scroll.addEventListener("wheel", (e) => {
    e.preventDefault()

    pics_scroll.scrollLeft -= e.deltaY;

    pics_scroll.style.scrollBehavior = "auto"

});

previous.addEventListener("click", () => {
    pics_scroll.style.scrollBehavior = "smooth"
    pics_scroll.scrollLeft -= 300;
})

next.addEventListener("click", () => {
    pics_scroll.style.scrollBehavior = "smooth"
    pics_scroll.scrollLeft += 380;
})

previous.addEventListener("dblclick", () => {
    pics_scroll.style.scrollBehavior = "smooth";
    pics_scroll.scrollLeft -= 10550;

})

next.addEventListener("dblclick", () => {
    pics_scroll.style.scrollBehaviour = "smooth"
    pics_scroll.scrollLeft = +10550;
})

pics.forEach((pics) => {

    pics.addEventListener("mouseenter", () => {
        buttons.forEach((buttons) => {
            buttons.style.display = "none"
        })
    })

})
pics.forEach((pics) => {
    pics.addEventListener("mouseleave", () => {
        buttons.forEach((btns) => {
            btns.style.display = "block"
        })

    })
})
