const cname = document.getElementById("name");
const cnum = document.getElementById("number");
const cMM = document.getElementById("month");
const cYY = document.getElementById("year");
const cvc = document.getElementById("cvc");
// card front
const cNum = document.querySelector(".cNum");
const cName = document.querySelector(".cName");
const cvcNum = document.querySelector(".cvcNum");
const cExp = document.querySelector(".exp");
// errors
const numError = document.querySelector(".numberError");
const expError = document.querySelector(".expError");
const cvcError = document.querySelector(".cvcError");

let formComplete = true;
const submit = document.querySelector(".submit");
const proceed = document.querySelector(".continue");
const complete = document.querySelector(".complete");
const form = document.querySelector("form")

submit.addEventListener("click", function () {
  cName.textContent = cname.value;
  

  let cardnum = cnum.value;
  if (isNaN(cardnum) || cardnum.length != 16) {
    console.log("not an number or number not completer");
    numError.style.display = "block";
    cnum.style.borderColor = "red";
    formComplete = false;
  } else {
    cNum.textContent = `${cardnum.substring(0,4)} ${cardnum.substring(4,8)} ${cardnum.substring(8,12)} ${cardnum.substring(12,16)}`;
    cnum.style.borderColor = "hsl(270, 3%, 87%)";
  
  }

  if (cMM.value == "") {
    expError.style.display = "block";
    cMM.style.borderColor = "red";
    formComplete=false
  }
  else if(cYY.value==""){
      expError.style.display="block"
      cYY.style.borderColor="red"
      formComplete=false
    }
    else {
      cExp.textContent = `${cMM.value}/${cYY.value}`;
      cMM.style.borderColor="hsl(270, 3%, 87%)"
      cYY.style.borderColor="hsl(270, 3%, 87%)"
    
  }

  if (cvc.value ==="") {
    cvcError.style.display = "inline-block";
    cvc.style.borderColor = "red";
    formComplete=false
  } else {
    cvcNum.textContent = cvc.value;
    cvc.style.borderColor = "hsl(270, 3%, 87%)"
  }

  if(formComplete){
      complete.style.display="block"
      proceed.style.display= "block"
      submit.style.display="none"
      form.style.display="none"
  }
  console.log(cname.value)
});

proceed.addEventListener("click",function(){
  complete.style.display="none"
  proceed.style.display= "none"
  submit.style.display="block"
  form.style.display="block"
})

