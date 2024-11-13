sections = document.querySelectorAll("section");
navBar = document.querySelector("#navbar_list");
// Create <li> elements for a navbar
sections.forEach((section) =>{
    item = document.createElement("li");
    item.innerHTML = `<a href="#${section.id}" data-nav="${section.id}" class="menu__link">${section.dataset.nav}</a>`;
    navBar.appendChild(item);
})

// Adding class active for sections
const makeActive = ()=>{
    sections.forEach((section) =>{
        const box = section.getBoundingClientRect()
        if(box.top <= 200 && box.bottom >= 200){
            section.classList.add("active");
            document.querySelector(`a[data-nav=${section.id}]`).classList.add('active');
        }
        else{
            section.classList.remove("active")
            document.querySelector(`a[data-nav=${section.id}]`).classList.remove('active');
        }
    })
}
// Add scroll event listener
document.addEventListener("scroll", makeActive);
//  Smooth scrolling from navbar to section
navBar.addEventListener("click", (event) => {
    event.preventDefault(); 
    if (event.target && event.target.nodeName === 'A') {
        const sectionId = event.target.getAttribute('href');
        console.log(sectionId);
        const section = document.querySelector(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// Select go up btn
let goUp = document.querySelector(".up");
// Add an event listener for the scroll event
window.addEventListener("scroll", function() {
    if (window.scrollY >= 400) {
        goUp.classList.add("show");
    } else {
        goUp.classList.remove("show");
    }
});
// Add an event listener for the 'click' event on the 'goUp' button
goUp.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
