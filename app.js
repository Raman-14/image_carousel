const slides = document.querySelectorAll(".slide")
var counter = 0;
console.log(slides)
let slideInterval;

slides.forEach(
    (slide, index) => {
        slide.style.left = `${index * 100}%`
    }
)

const goPrev = () => {
    clearInterval(slideInterval); 
    if(counter===0){
        counter = slides.length;
    }
    counter--
    slideImage()
    slideInterval = setInterval(autoSlide, 3000);
}

const goNext = () => {
    clearInterval(slideInterval); 
    counter++
    slideImage()
    slideInterval = setInterval(autoSlide, 3000);
}

const autoSlide = () => {
    counter++;
    slideImage();
};
slideInterval = setInterval(autoSlide, 3000);

const slideImage = () => {
    slides.forEach(
        (slide, index) => {
            if(counter===slides.length){
                // alert('hi')
            slide.style.transform =`translateX(${0}%)`;
            counter = 0;
    }else{
        slide.style.transform =`translateX(-${counter * 100}%)`;
    }
}
    )
}

