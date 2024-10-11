let bar = document.querySelector(".baricon")
let navs = document.querySelector(".navs")



bar.addEventListener("click", ()=>{
    
   if (navs.clientHeight == 0){
    navs.style.height = `${navs.scrollHeight}px`;
   }
   else{
    navs.style.height = "";}
}
)



const slides = document.querySelectorAll(".slide");
    let counter = 0; // Use let instead of var for block scope

    slides.forEach((slide, index) => {
        slide.style.left = `${index * 100}%`;
    });

    const goPrev = () => { // Corrected syntax for function definition
        counter--;
        if (counter < 0) {
            counter = slides.length - 1; // Loop to the last slide
        }
        slideImage();
    };

    const goNext = () => {
        counter++;
        if (counter >= slides.length) {
            counter = 0; // Loop back to the first slide
        }
        slideImage();
    };

    const slideImage = () => {
        slides.forEach((slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`;
        });
    };