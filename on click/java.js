//text limits
let inputBox = document.querySelector(".input-box"),
textarea = inputBox.querySelector("input"),
signalNum = inputBox.querySelector(".signal_num");
 let validName = false;
textarea.addEventListener("keyup", ()=>{
  let valLenght = textarea.value.length; //stored textarea value length into valLength
  let regex = /[0-9\!\@\#\$\%\^\&\*\)\(\+\=\.\<\>\{\}\[\]\:\;\'\"\|\~\`\_\-]/g;
 
signalNum.innerText = valLenght; //converted signalNum innerText by valLength
  (valLenght > 0) ? inputBox.classList.add("active") : inputBox.classList.remove("active"); // if valLength is greater than 0 than add active class if not than remove active class
  (valLenght > 30) ? inputBox.classList.add("error") : inputBox.classList.remove("error"); // if valLength is greater than 30 than add error class if not than remove error class
  if (textarea.value.length >= 31 || textarea.value.length <3){
    ver1 = false;
    
    textarea.style.borderColor = "red";
    validName = false;
  }
  else if(textarea.value.match(regex)){
    ver2 = false;
    
    textarea.style.borderColor = "red";
    validName = false;

  }
  else {
    ver1 = true;

    textarea.style.borderColor = "green";
    validName = true;
    
  }
  console.log(valLenght)
});
//email verification
  const form = document.querySelector("form"),
  eInput = form.querySelector(".input"),
  text = form.querySelector(".text");
  form.addEventListener("keyup", (e)=>{
    e.preventDefault(); //preventing form from submitting
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //Regex pattern to validate email
    form.classList.add("error");
    form.classList.remove("valid");
    if(eInput.value == ""){
      text.innerText = "Email can't be blank";
      eInput.style.borderColor = "red";
      text.style.color = "red";
      validName = false;
    }else if (!eInput.value.match(pattern) ) { //if patter is not matched with user's enter value
      text.innerText = "Please enter a valid email";
      text.style.color = "red";
      eInput.style.borderColor = "red";
      validName = false;

    }else{
      form.classList.replace("error" , "valid"); //replacing error class with valid class
      text.innerText = "This is a valid email";
      text.style.color = "white";
      eInput.style.borderColor = "green";
      validName = true;

    }
  });
//phone number verification
function NumVer()
{
    var num = document.getElementById("PhoneNum");
    var output = document.getElementById("PhoneError");
    if( num.value.match(/(06)\d{8}$|(05)\d{8}$|(07)\d{8}$/) && num.value.match(/^[0-9]+$/) )
    {
        output.innerHTML="";
        num.style.borderColor = "green";
        validName = true;
    }
    else
    {
        output.innerHTML = 'Oops! your number is invalid';
        output.style.color= "red"
        num.style.borderColor = "red";
        validName = false;

    }
}

//Multi Select 
const selectBtn = document.querySelector(".select-btn"),
      items = document.querySelectorAll(".item");

selectBtn.addEventListener("click", () => {
    selectBtn.classList.toggle("open");
});

items.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("checked");
    });
})
///club  Multi select 3 limit
function selection()
{
var input = document.getElementsByName("choice");
var sel = 0;
var i;
var output = document.getElementById("choice-out");

for(i=0; i<input.length; i++)
{
    if(input[i].checked==true)
    {
        sel+= 1;
        console.log(i);
        validName = true;
    }
}
if(sel > 3 || sel == 0)
{
    output.innerHTML='Choose a club!!! Maximum 3 clubs';
    output.style.color= "red";
    validName = false;
    return false;
}
}
///gender validation
function Genval()
{
    var FirstDot = document.getElementById("dot-1");
    var SecondDot = document.getElementById("dot-2");
    var ThirdDot = document.getElementById("dot-3");
    var output = document.getElementById("gender-out");

    if(FirstDot.checked==true)
    {
        output.innerHTML="";
        validName = true;
    }
    else if(SecondDot.checked==true)
    {
        output.innerHTML="";
        validName = true;
    }
    else if(ThirdDot.checked==true)
    {
        output.innerHTML="";
        validName = true;
    }
    else
    {
        output.innerHTML = 'What exactly are you ?';
        output.style.color= "red"
        validName = false;
    }
}
/// Group selection
function Classval()
{
  var DW101 = document.getElementById("DW101");
  var DW102 = document.getElementById("DW102");
  var DW103 = document.getElementById("DW103");
  var DM101 = document.getElementById("DM101");
  var DM102 = document.getElementById("DM102");


  var output = document.getElementById("group-out");

  if(DW101.checked==true)
  {
      output.innerHTML="";
      validName = true;
  }
  else if(DW102.checked==true)
  {
      output.innerHTML="";
      validName = true;
  }
  else if(DW103.checked==true)
  {
      output.innerHTML="";
      validName = true;
  }
  else if(DM101.checked==true)
  {
    output.innerHTML="";
    validName = true;
  }
  else if(DM102.checked==true)
  {
    output.innerHTML="";
    validName = true;
;
  }
  else
  {
      output.innerHTML = 'Choose at least one';
      output.style.color= "red";
      validName = false;
  }
}

///button click
MainBtn = document.getElementById("submit");

MainBtn.addEventListener("click", verif )



 function verif(e)
 {
  Genval()
  Classval()
  selection()
  e.preventDefault();
  console.log(validName )
    if(validName == true)
    {
      window.location.href = "./thanks.html"; 
    }
 }
 verif()
