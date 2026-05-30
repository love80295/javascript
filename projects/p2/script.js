// we need to select the form 
const form = document.querySelector("form");
// event listner will be everywhere
form.addEventListener('submit' , function(e){
    e.preventDefault() // iska kaam hota default action ko rokna , jaise we know that form submit hota h get or post method se use rokne keliye 
   const height = parseInt(document.querySelector("#height").value);
   const weight = parseInt(document.querySelector("#weight").value);
   const result = document.querySelector("#results");
   if(height==='' || height<0 || isNaN(height)){
    result.innerHTML = "please enter a valid height";
   }
   if(weight==='' || weight<0 || isNaN(weight)){
    result.innerHTML = "please enter a valid height";
   }
   const bmi = (weight / ((height * height) / 10000)).toFixed(2);
   if(bmi<18.6){
    result.innerHTML = `you bmi is ${bmi} , underweight`;
   }else if(bmi>=18.6 && bmi<=24.9){
    result.innerHTML = `you bmi is ${bmi} , normal`;
   }else{
    result.innerHTML = `you bmi is ${bmi} , chutiya he tu`;
   }

})