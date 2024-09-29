const images = document.querySelectorAll
("img.vue")
let options = {
    rootMargin: "-10% 0px",
    threshold: 0
}

function handleIntersect(entries){
    console.log(entries);

    entries.forEach(entry=>{
        if (entry.isIntersecting){
            entry.target.style.animation ='slide 4s ease-in-out forwards'
        } 
    })
}
const observer = new IntersectionObserver 
(handleIntersect, options)
images.forEach( image => {
    observer.observe(image);
})