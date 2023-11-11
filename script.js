const form = document.getElementById("form");
const username = document.getElementById("username");
const sobrenome = document.getElementById("sobrenome");
const email = document.getElementById("email");
const age = document.getElementById("age");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    checkForm();
});

username.addEventListener("blur", () => {
    checkInputUsername();
}) // quando clicar fora, sai a mensagem de erro

sobrenome.addEventListener("blur", () => {
    checkInputSobrenome();
}) // quando clicar fora, sai a mensagem de erro

email.addEventListener("blur", () => {
    checkInputEmail();
}) // quando clicar fora, sai a mensagem de erro

age.addEventListener("blur", () => {
    checkInputAge();
}) // quando clicar fora, sai a mensagem de erro

function checkInputUsername(){ // verifica username
    const usernameValue = username.value;

    if(usernameValue === ""){
        errorInput(username, "Não pode ficar vazio!") //mostrar mensagem de erro
    }else if(usernameValue.length < 3){
        errorInput(username, "Nome tem que ter no minimo 3 caracteres") //mostrar mensagem de erro
    }else{
        const formItem = username.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputSobrenome(){ // verifica username
    const sobrenomeValue = sobrenome.value;

    if(sobrenomeValue === ""){
        errorInput(sobrenome, "Não pode ficar vazio!") //mostrar mensagem de erro
    }else{
        const formItem = sobrenome.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputEmail(){ // verifica email
    const emailValue = email.value;

    if(emailValue === ""){
        errorInput(email, "Não pode ficar vazio!") //mostrar mensagem de erro
    }else{
        const formItem = email.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputAge(){ // verifica idade
    const ageValue = age.value;

    if(ageValue === ""){
        errorInput(age, "Não pode ficar vazio!") //mostrar mensagem de erro
    }else{
        const formItem = age.parentElement;
        formItem.className = "form-content"
    }
}
function checkForm(){
    checkInputUsername(); // para validar
    checkInputSobrenome();
    checkInputEmail(); // para validar o email
    checkInputAge();
    
    const formItems = form.querySelectorAll(".form-content")

    const isValid = [...formItems].every( (item) => {
        return item.className === "form-content"
    });

    if(isValid){
        alert("Cadastrado com Sucesso!")
    }else{
        alert("Preencha todos os campos corretamente.")
    }
}

//Mostra mensagem de erro
function errorInput(input,message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a");

    textMessage.innerText = message;

    formItem.className = "form-content error"
}