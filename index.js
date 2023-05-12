
//input its defined
const Nint = document.querySelector("#int");

//this section buttons are defined 
const btn1 = document.querySelector("#ktoc");
const btn2 = document.querySelector("#ftoc");
const btn3 = document.querySelector("#rtoc");
//second row
const btn4 = document.querySelector("#ctok");
const btn5 = document.querySelector("#ftok");
const btn6 = document.querySelector("#rtok");
//third row
const btn7 = document.querySelector("#ctof");
const btn8 = document.querySelector("#ktof");
const btn9 = document.querySelector("#rtof");
//fourth row
const btn10 = document.querySelector("#ctor");
const btn11 = document.querySelector("#ftor");
const btn12 = document.querySelector("#ktor");
//clear button
const btn13 = document.querySelector("#clr");

// output it's defined
const output = document.querySelector(".result");

// add event for click
//first row
btn1.addEventListener("click",ktoc);
btn2.addEventListener("click",ftoc);
btn3.addEventListener("click",rtoc);
//second row
btn4.addEventListener("click",ctok);
btn5.addEventListener("click",ftok);
btn6.addEventListener("click",rtok);
// third row
btn7.addEventListener("click",ctof);
btn8.addEventListener("click",ktof);
btn9.addEventListener("click",rtof);
//fourth row
btn10.addEventListener("click",ctor);
btn11.addEventListener("click",ftor);
btn12.addEventListener("click",ktor);
//reset button
btn13.addEventListener("click",Clear);

function Clear(){
 output.innerHTML = "0";
 Nint.innerHTML = "0"; 
//alert("Values cleaned succesfully");
}

//This functions converts the value Celcius to Kelvin, Faranheit and Rankine

function ctok(){
  const d =  parseInt(Nint.value) + 273.15;
  return output.innerHTML = d + " °Kelvin";
}
function ctof(){
  const g = (parseInt(Nint.value) * (9/5) + (32));
  return output.innerHTML = g + " °Faranheit";
}
function ctor(){
  const j = (parseInt(Nint.value)*(5/9))+(491.67);
  return output.innerHTML = j + " °Rankine";
}


//This functions convert the Kelvin to Celcius, Faranheit and Rankie 
function ktoc(){
const a = Nint.value - 273.15;
return output.innerHTML= a + " °Celcius";
}
function ktof(){
  const h = ((Nint.value - 273.15)*(9/5) + 32);
  return output.innerHTML = h + " °Faranheit";
}
function ktor(){
  const l = Math.round((parseInt(Nint.value) - 273.15)*(1.8) + 491.67);
  return output.innerHTML = l + " °Rankine";
}
// function for convert Fahrenheit to Celcius, Kelvin and Rankine
function ftoc(){
    const b = (Nint.value - 32)*(5/9);
    return output.innerHTML= b + " °Celcius";
}
function ftok(){
  const e = (parseInt(Nint.value) - 32)*(5/9) + 273.15;
  return output.innerHTML = e + " °Kelvin";
}
function ftor(){
  const k = (parseInt(Nint.value) + 459.67);
  return output.innerHTML = k + " °Rankine";
}

// this functions convert Rankine to Celcius, Fahrenheit and Kelvin
function rtoc(){
    const c = (Nint.value - 491.67 )*(5/9);
    return output.innerHTML= c + " °Celcius";
}
function rtok(){
    const f = Math.round((Nint.value - 491.67)*(5/9) + 273.15);
    return output.innerHTML = f + " °kelvin";
}
function rtof(){
    const i = (parseInt(Nint.value) - 459.67);
    return output.innerHTML = i + " °Fahrenheit";
}