let btn=document.querySelector(".btn")
let p=document.querySelector(".result")
btn.addEventListener("click",vowelcounter);

function vowelcounter(){
  let input=document.querySelector(".input-text");
  let word=input.value;
  const vowel="aeiouAEIOU";
  let count=0;
  for(let i=0;i<word.length;i++){
    let char=word.charAt(i);
    if(vowel.includes(char)){
      count++;
    }
  }
  if(count>0){
    p.innerHTML=`${word.toUpperCase()} have ${count} vowels`
  }else{
    p.innerHTML=`${word.toUpperCase()} have 0 vowels`;
  }
  input.value="";
}