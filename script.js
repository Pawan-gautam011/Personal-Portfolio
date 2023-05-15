const mainButton = document.getElementById("btn")
const HidePara = document.getElementById("hidePara")

mainButton.addEventListener("click", ()=>{
    HidePara.classList.toggle("active")
    
    mainButton.textContent = mainButton.textContent.includes('Read More') ? "Read Less" : "Read More";
})
