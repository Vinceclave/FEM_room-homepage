const navToggle = document.querySelector('.nav_toggle')
const sliderTitle = document.querySelector('.slider-title')
const imgBanner = document.querySelector('.img-banner')
const sliderDescription = document.querySelector('.slider-description')
const faBars = document.querySelector('.fa-bars')
let menu = document.querySelector('.header-menu')
const leftControl = document.querySelector('.left-key');
const rightControl = document.querySelector('.right-key');
let index = 0;



// toggle open and close
navToggle.addEventListener('click', () => {
    menu.classList.toggle('show-menu')
    faBars.classList.toggle('fa-times')
    if(menu.classList.contains('show-menu')) {
      navToggle.style.color = 'black'
    } else {
        navToggle.style.color = 'white'
    }
})

const imageArray = [
    {
        image: "./images/desktop-image-hero-1.jpg",
        title: "Discover innovative ways to decorate",
        paragraph: 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.'
    },
    {
        image: "./images/desktop-image-hero-2.jpg",
        title: "We are available all across the globe",
        paragraph: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
    },
    {
        image: "./images/desktop-image-hero-3.jpg",
        title: "Manufactured with the best materials",
        paragraph: `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
        to ensure that every product is made as perfect and as consistent as possible. With three decades of 
        experience in this industry, we understand what customers want for their home and office.`
    },
]

const renderHero = ({image,title,paragraph}) => {
    sliderDescription.innerHTML = paragraph;
    sliderTitle.innerHTML = title;
    imgBanner.style.backgroundImage = `url('${image}')`
}



leftControl.addEventListener('click', ()=> {
    index--;
    if(index < 0) {
        index = 2;
    }
    renderHero(imageArray[index]);
    console.log(index);
})


rightControl.addEventListener('click', ()=> {
    index++;
    if(index > 2) {
        index = 0;
    }
    renderHero(imageArray[index]);
    console.log(index);
})
