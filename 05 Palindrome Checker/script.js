let btn=document.querySelector(".btn")
let p=document.querySelector(".result")
btn.addEventListener("click",palindrome);

function palindrome(){
  let input=document.querySelector(".input-text");
  let word=input.value;
  let reverse=word.split('').reverse().join('');
  if(word === reverse){
    p.innerHTML=`${word.toUpperCase()} is a palindrome`
  }else{
    p.innerHTML=`${word.toUpperCase()} is a not palindrome`
  }
  input.value="";
}