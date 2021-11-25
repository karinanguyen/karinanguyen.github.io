const slider = document.querySelector(".slider input"); 
const dragline = document.querySelector("slider .drag-line"); 

slider.oninput= () => {
    let sliderVal = slider.value; 
    dragline.style.left = sliderVal + "%"
}