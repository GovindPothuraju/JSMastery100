const count=document.querySelector(".count")
const add=document.querySelector(".add")
const resetcount=document.querySelector(".reset")
const subtract=document.querySelector(".subtract")
const buttons=document.querySelector(".buttons")

buttons.addEventListener("click",(e) =>{
  if(e.target.classList.contains("add")){
    count.innerHTML++;
    setcolor();
  }
  else if(e.target.classList.contains("subtract")){
    count.innerHTML--;
    setcolor();
  }else if(e.target.classList.contains("reset")){
    count.innerHTML=0;
    setcolor();
  }
});
function setcolor(){
  if(count.innerHTML > 0){
    count.style.color="green";
  }else if(count.innerHTML < 0){
    count.style.color="red";
  }else {
    count.style.color="#fff";
  }
}