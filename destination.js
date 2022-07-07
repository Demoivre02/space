
function toggle(){
$(".lines , .burger").on("click",()=>{
    $("ul").toggleClass("ulIn")
})
}
toggle()


const img = document.querySelector("img")
const body= document.querySelector("body")


function rotate(){
setInterval (
     ()=>{
        img.style.transform= "rotateZ(360deg)"
    
       },Infinity)

    }
    rotate();


