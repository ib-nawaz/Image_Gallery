let previous = document.body.querySelector(".pre")
let next = document.body.querySelector(".next")
let pics_scroll = document.body.querySelector(".pics")


pics_scroll.addEventListener("wheel", (e) => {
    e.preventDefault()

    pics_scroll.scrollLeft -= e.deltaY;
     
     pics_scroll.style.scrollBehavior = "auto"
  
});

previous.addEventListener("click",()=>{
    pics_scroll.style.scrollBehavior ="smooth"
       pics_scroll.scrollLeft -=300
})
next.addEventListener("click", () => {
    pics_scroll.style.scrollBehavior = "smooth"
    pics_scroll.scrollLeft +=380;
    })