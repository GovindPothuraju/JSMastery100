let btn=document.querySelector(".generate")
let number=document.querySelector(".number")
const generatenumber=()=>{
  const randomNumber=Math.floor(Math.random()*100+1)
  number.innerHTML=randomNumber
}
btn.addEventListener("click",generatenumber)
