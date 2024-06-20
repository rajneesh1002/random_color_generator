const getColor = () => {
    const randomNUmber = Math.floor(Math.random()*16777215);
    const randomcode = "#"+ randomNUmber.toString(16);
    
    document.body.style.backgroundColor = randomcode;
    document.getElementById("colorcode").innerText =randomcode
}
document.getElementById("btn").addEventListener(
    "click",
    getColor
)

getColor();