 const input=document.querySelector(".input");
    const check=document.querySelector(".check");
    const reset=document.querySelector(".reset");
    const output=document.querySelector(".output");
    const time=document.querySelector(".time");
    const ready = document.querySelector(".ready");
    
    check.disabled=true;
    input.disabled = true;
    ready.disabled=false;

    let computer=Math.floor(Math.random()*100)+1;
    let count=0;
    let timeleft=30;
    let intervalId;

    function startTimer(){
        time.textContent=timeleft
        intervalId=setInterval(()=>{
          timeleft--;
          time.textContent=timeleft
          if(timeleft < 0){
            clearInterval(intervalId);
            output.textContent = `⏰ Time's up! The number was ${computer}`;
            output.style.color = "orange";
            check.disabled=true;
            input.disabled = true;
          }
      },1000)
    }
    

    check.addEventListener("click",()=>{
            const val=Number(input.value);
            count++;
            if(val == computer){
              
              output.textContent=`Congratulations ! you guessed in ${count} moves`;
              output.style.color="green"
              clearInterval(intervalId);
              check.disabled=true;
              input.disabled=true;

            }else if(val > computer){
              output.textContent=" Too high ! you guessed"
              output.style.color="red"
            }else if(val < computer){
              output.textContent=" Too low ! you guessed";
              output.style.color="red";
            } 
            input.value="";
    })

    reset.addEventListener("click",()=>{
      input.value="";
      computer=Math.floor(Math.random()*100)+1;
      count=0;
      output.textContent="";
      timeleft=30;
      time.textContent=timeleft;
      clearInterval(intervalId);

      check.disabled=true;
      input.disabled = true;
      ready.disabled=false; 
      if(ready.diabled){
        startTimer();
      }
    })

    ready.addEventListener("click", () => {
      startTimer();
      ready.disabled = true; 
      input.disabled=false;
      check.disabled=false;
    });