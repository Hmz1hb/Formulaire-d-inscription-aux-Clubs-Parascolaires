///button
  document.getElementById("submit").addEventListener("click",function(){
    NumVer();
    selection();
    Genval()
    Classval()
  })
//text limits
let inputBox = document.querySelector(".input-box"),
textarea = inputBox.querySelector("input"),
signalNum = inputBox.querySelector(".signal_num");

textarea.addEventListener("keyup", ()=>{
  let valLenght = textarea.value.length; //stored textarea value length into valLength

  signalNum.innerText = valLenght; //converted signalNum innerText by valLength
  (valLenght > 0) ? inputBox.classList.add("active") : inputBox.classList.remove("active"); // if valLength is greater than 0 than add active class if not than remove active class
  (valLenght > 30) ? inputBox.classList.add("error") : inputBox.classList.remove("error"); // if valLength is greater than 30 than add error class if not than remove error class

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
    }else if (!eInput.value.match(pattern) ) { //if patter is not matched with user's enter value
      text.innerText = "Please enter a valid email";
      text.style.color = "red";
      eInput.style.borderColor = "red";

    }else{
      form.classList.replace("error" , "valid"); //replacing error class with valid class
      text.innerText = "This is a valid email";
      text.style.color = "white";
      eInput.style.borderColor = "white";

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
        num.style.borderColor = "#9b59b6";
    }
    else
    {
        output.innerHTML = 'Oops! your number is invalid';
        output.style.color= "red"
        num.style.borderColor = "red";

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

for(i=0; ci<input.length; i++)
{
    if(input[count].checked==true)
    {
        sel+= 1;
        console.log(i)
    }
}
if(sel > 3)
{
    output.innerHTML='You can choose only 3 clubs';
    output.style.color= "red";
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
    }
    else if(SecondDot.checked==true)
    {
        output.innerHTML="";
    }
    else if(ThirdDot.checked==true)
    {
        output.innerHTML="";
    }
    else
    {
        output.innerHTML = 'What exactly are you ?';
        output.style.color= "red"
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
  }
  else if(DW102.checked==true)
  {
      output.innerHTML="";
  }
  else if(DW103.checked==true)
  {
      output.innerHTML="";
  }
  else if(DM101.checked==true)
  {
    output.innerHTML="";
  }
  else if(DM102.checked==true)
  {
    output.innerHTML="";
  }
  else
  {
      output.innerHTML = 'Choose at least one';
      output.style.color= "red";
  }
}
