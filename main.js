//variaveis form
const namee = document.querySelector("#name");
const number = document.querySelector("#number");
const month = document.querySelector("#month");
const year = document.querySelector("#year");
const cvc = document.querySelector("#cvc-realy");

//variaveis card

const nameCard = document.querySelector("#name-card");
const numberCard = document.querySelector("#number-card");
const monthCard = document.querySelector("#month-card");
const yearCard = document.querySelector("#year-card");
const cvcCard = document.querySelector("#cvc-card");

//buttons

const submit = document.querySelector("#botao");
const continar = document.querySelector("#continue");
const form = document.querySelector("#form");
const thanks = document.querySelector("#thanks")
 
//error
const erroExp = document.querySelector("#erroExp");
const erroNumber = document.querySelector("#erroNumber");
const erroCvc = document.querySelector("#erroCvc");



//funçoes
    
2
function setAll(){
    
    setName();
    setNumber();
    setMonth();
    setYear();
    setCVC();
}
function toggleHide(){
    form.classList.toggle("hide");
    thanks.classList.toggle("hide");
}
function setName() {
    nameCard.textContent = namee.value.toUpperCase();
}
function setNumber(){
    numberCard.textContent = number.value;
   
}
function setMonth(){
    monthCard.textContent = month.value;
}
function setYear(){
    yearCard.textContent = year.value;
}
function setCVC(){
    cvcCard.textContent = cvc.value;
}
function verificarCampos(){
    if(namee.value === ""){
       preventDefaultI();
    }
    if(!validateNumber(number.value, 16)){
        erroNumber.innerText = "Insira um Valor Válido (min. 16 Caracteres)!";
    }
    if(number.value === ""){
       preventDefaultI();
    }
    if(number.value.length < 16){
        
        number.classList.toggle("erro2");
        preventDefaultI();
    }
    
    if(!validateNumber(number.value, 16)){
        erroNumber.innerText = "Insira um Valor Válido (min. 16 Caracteres)!";
        preventDefault();
    }
    else{
        erroNumber.textContent = "";

    }
    if(month.value === ""){
       preventDefaultI();
    }
    if(month.value.length < 2){
        
        preventDefaultI();
    }

    if(month.value >= 13){
        erroExp.innerText = "Insira uma Data Válida!";
        month.classList.toggle("erro3");
        preventDefaultI();
    }else{
        erroExp.innerText = "";
        month.classList.remove("erro3");
    }
    if(year.value === ""){
       preventDefaultI();
    }
    if(year.value.length < 2){
        preventDefaultI();
    }
    
    if(year.value >= 32 || year.value <= 22){
        erroExp.innerText = "Insira uma Data Válida!";
        year.classList.toggle("erro4");
        preventDefaultI();
        
    }else{
            erroExp.innerText = "";
            year.classList.remove("erro4");
        }
    if(cvc.value === ""){
       preventDefaultI();
    }
    if(cvc.value.length < 3){
        
        erroCvc.innerText = "Insira um CVC correto!";
        cvc.classList.toggle("erro5");
        preventDefaultI();

    }else{
        erroCvc.innerText = "";
        cvc.classList.remove("erro5");
    }
}
function validateNumber (numberr, minValue){
    if(numberr.length >= minValue){
        return true;
    }
    return false;
}
function clearInputs(){
        namee.value = "";
        number.value = "";
        month.value = "";
        year.value = "";
        cvc.value = "";
}
//eventos
submit.addEventListener("click", (e) => {
    e.preventDefault();
    verificarCampos();
    setAll();
    toggleHide();

    
    
});
continar.addEventListener("click", (e) =>{
    e.preventDefault();

    //document.getElementById("name").placeholder="oi";
    
    setAll();
        nameCard.textContent = "Jane Appleseed";
        numberCard.textContent = "0000 0000 0000 0000";
        monthCard.textContent = "00";
        yearCard.textContent = "00";
        cvcCard.textContent = "000";
    clearInputs()    
    toggleHide();
});

    number.addEventListener("keypress", function(e){

    let keycode = (e.keycode ? e.keycode : e.which);
    
    if(keycode >= 65 && keycode <= 90 || keycode >= 97 && keycode <= 122) {
        e.preventDefault();
    }if(keycode >= 123 && keycode <= 9830) {
        e.preventDefault();
    }if(keycode >= 91 && keycode <= 96) {
        e.preventDefault();
    }
    });
    month.addEventListener("keypress", function(e){

    let keycode = (e.keycode ? e.keycode : e.which);
    
    if(keycode >= 65 && keycode <= 90 || keycode >= 97 && keycode <= 122) {
        e.preventDefault();
    }if(keycode >= 123 && keycode <= 9830) {
        e.preventDefault();
    }if(keycode >= 91 && keycode <= 96) {
        e.preventDefault();
    }
    });
    year.addEventListener("keypress", function(e){

    let keycode = (e.keycode ? e.keycode : e.which);
    
    if(keycode >= 65 && keycode <= 90 || keycode >= 97 && keycode <= 122) {
        e.preventDefault();
    }if(keycode >= 123 && keycode <= 9830) {
        e.preventDefault();
    }if(keycode >= 91 && keycode <= 96) {
        e.preventDefault();
    }
    });
    cvc.addEventListener("keypress", function(e){

    let keycode = (e.keycode ? e.keycode : e.which);
    
    if(keycode >= 65 && keycode <= 90 || keycode >= 97 && keycode <= 122) {
        e.preventDefault();
    }if(keycode >= 123 && keycode <= 9830) {
        e.preventDefault();
    }if(keycode >= 91 && keycode <= 96) {
        e.preventDefault();
    }
    });


    namee.addEventListener("keypress", function(e){

    let keycode = (e.keycode ? e.keycode : e.which);
    
    if(keycode >= 33 && keycode <= 64) {
        e.preventDefault();
    } 
    if(keycode >= 123 && keycode <= 9830) {
        e.preventDefault();
    }if(keycode >= 91 && keycode <= 96) {
        e.preventDefault();
    }
    
});







      
