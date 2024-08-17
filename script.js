const imgSlide = Array.from(document.querySelectorAll('.imageing'));
const prev = document.querySelector('.tag1');
const nxt = document.querySelector('.tag2');
currentSlider = 0;
imgSlideCount = imgSlide.length;

const check = ()=>{
    imgSlide.forEach((image,index)=>{
        image.classList.remove('active');
        if(currentSlider === index){
            image.classList.add('active');
        }
    });

    prev.classList.toggle('disable',currentSlider === 0);
    nxt.classList.toggle('disable',currentSlider === imgSlideCount-1);
}

const prevFun = ()=>{
    if(currentSlider>0){
        currentSlider--;
        check();
    }
}

const nxtFun = ()=>{
    if(currentSlider<imgSlideCount-1){
        currentSlider++;
        check();
    }
}

function showParagraph(id) {
    // Hide all sections
    var sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
        section.classList.remove('active');
    });

    // Show the selected section
    var selectedSection = document.getElementById(id);
    selectedSection.classList.add('active');
}

// Show the first section by default
document.addEventListener("DOMContentLoaded", function() {
    showParagraph('p1');
});

prev.onclick = prevFun;
nxt.onclick = nxtFun;
check();

const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    menuIcon.classList.toggle('open');
    closeIcon.classList.toggle('show');
});

closeIcon.addEventListener('click', () => {
    navLinks.classList.remove('show');
    menuIcon.classList.remove('open');
    closeIcon.classList.remove('show');
});
