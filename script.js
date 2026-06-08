let operands=document.querySelectorAll(".operand");
let display=document.querySelector(".displayer");
let ACBtn=document.querySelector("#AC");
let deleteBtn=document.querySelector(".DEL");
let operators=document.querySelectorAll(".operator");
let getAnswer=document.querySelector(".answer");


display.innerText="";


operands.forEach((operand)=>{
       operand.addEventListener("click",()=>{
       let operandValue= operand.getAttribute("id");
       display.innerText=display.innerText+operandValue;
    })
})
operators.forEach((operator)=>{
    operator.addEventListener("click",()=>{
       let operatorValue=operator.getAttribute("id");
       display.innerText=display.innerText+operatorValue;
      
    })
})

    
ACBtn.addEventListener("click",()=>{
     display.innerText="";

});

deleteBtn.addEventListener("click",()=>{
    let text=display.innerText;
    let notDeleted=text.slice(0,text.length-1);
    display.innerText=notDeleted;
});

const checkValidity=(expression)=>{
    if(expression===""){
        return false;
    }
     let lastChar=expression.slice(-1);
     let chars=["+","-","*","^","/","%"];
//for the cases like 5++2
     for(let i=0;i<expression.length-1;i++){
        let current=expression[i];
        let next=expression[i+1];
        if(chars.includes(current)&& chars.includes(next)){
            return false;
        }
     }
     for (let char of chars){
      if(lastChar===char){
       
        return false;
      }

     }
   return true;
}

getAnswer.addEventListener("click",()=>{
    let expression=display.innerText;
     if(!checkValidity(expression)){
       display.innerText="Error";
       return;
     }
    
    let finalAnswer=eval(expression);
    display.innerText=finalAnswer;
})
 

