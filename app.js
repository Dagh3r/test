window.addEventListener("scroll", () => {
    document.querySelector("#nav-img").classList.toggle("window-scroll", window.scrollY > 3800)
})