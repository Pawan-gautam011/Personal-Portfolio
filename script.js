let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}









let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
const mainButton = document.getElementById("btn")
const HidePara = document.getElementById("hidePara")

mainButton.addEventListener("click", ()=>{
    HidePara.classList.toggle("active")
    
    mainButton.textContent = mainButton.textContent.includes('Read More') ? "Read Less" : "Read More";
})

window.onscroll= () =>{
    section.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height= sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top <offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');


            });

        }
    
    });


}






window.onscroll = () =>{
    let header =document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
    
}


