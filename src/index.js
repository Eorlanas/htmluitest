import "./styles.css"
import firstimage from "./assets/GFsps27WYAAJ7cf.png"
import secondimage from "./assets/image.png"
import thirdimage from "./assets/PXL_20240207_114304929.jpg"
const dropdownbutton = document.querySelector(".dropdown")
const imagearray = [firstimage, secondimage, thirdimage]
let currentindex = 1
let imagediv
dropdownbutton.addEventListener("click", makedropdown)


function makedropdown(){
    let option1 = document.createElement("div")
    let option2 = document.createElement("div")
    let option3 = document.createElement("div")
    option1.textContent = "1"
    option2.textContent = "2"
    option3.textContent = "3"
    let fulldiv = document.createElement("div")
    fulldiv.appendChild(option1)
    fulldiv.appendChild(option2)
    fulldiv.appendChild(option3)
    event.target.appendChild(fulldiv)
}


function addslideshow(){
    let fulldiv = document.createElement("div")
    fulldiv.classList = "slideshow"
    let leftbutton = document.createElement("button")
    leftbutton.addEventListener("click", goleft)
    leftbutton.classList = "slideshowbutton"
    fulldiv.appendChild(leftbutton)
    let picturediv = document.createElement("div")
    picturediv.classList = "picturediv"
    let slideshowimagediv = document.createElement("img")
    slideshowimagediv.src = imagearray[currentindex]
    picturediv.appendChild(slideshowimagediv)
    imagediv = slideshowimagediv
    fulldiv.appendChild(picturediv)
    let rightbutton = document.createElement("button")
    rightbutton.classList = "slideshowbutton"
    rightbutton.addEventListener("click", goright)
    fulldiv.appendChild(rightbutton)
    document.body.appendChild(fulldiv)
}


function goleft(){
    currentindex--
    if (currentindex < 0){
        currentindex = imagearray.length - 1
    }
    imagediv.src = imagearray[currentindex]
}


function goright(){
    currentindex++
    if (currentindex > imagearray.length - 1){
        currentindex = 0
    }
    imagediv.src = imagearray[currentindex]
}


addslideshow()