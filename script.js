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
    
    })


}






window.onscroll = () =>{
    let header =document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);
}



