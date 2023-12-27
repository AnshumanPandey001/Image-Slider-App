const slides = document.querySelectorAll(".slide");
var counter = 0;

// console.log(slides);

slides.forEach(
    (slide,index)=>{
        slide.style.left = `${index * 100}%`;
    }
)

const goNext = () =>{
    if(counter < slides.length-1){
    counter++;
    slideIamge();
}
    
}

const goPrev = () =>{
    if(counter== 0){
        
    }else{
        counter--;
        slideIamge(); 
    }
    
}

slideIamge = () =>{
    slides.forEach(
        (slide) =>{
            slide.style.transform = `translateX(-${counter*100}%)`
        }
    )
}