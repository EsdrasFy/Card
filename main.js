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


//funçoes

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
       preventDefaultI()
    }
    
    if(number.value === ""){
       preventDefaultI()
    }
    if(number.value.length < 16){
        preventDefaultI()
    }
    if(month.value === ""){
       preventDefaultI()
    }
    if(month.value.length < 2){
        preventDefaultI()
    }
    if(month.value > 12 ){
        preventDefaultI()
    }
    if(year.value === ""){
       preventDefaultI()
    }
    if(year.value.length < 2){
        preventDefaultI()
    }
    if(year.value > 30){
        preventDefaultI()
    }
    if(cvc.value === ""){
       preventDefaultI()
    }
    if(cvc.value.length < 3){
        preventDefaultI()
    }
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

    namee.value = "Jane Appleseed";
    number.value = "0000 0000 0000 0000";
    month.value = "00";
    year.value = "00";
    cvc.value = "000";

    setAll();
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







      
