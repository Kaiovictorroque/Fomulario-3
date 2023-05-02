const form = document.querySelector("#form")
const nameInput =  document.querySelector("#name")
const emailInput = document.querySelector("#email")
const passwordInput = document.querySelector("#password")
const jobSelect = document.querySelector("#job")
const messageTextarea = document.querySelector("#message")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Verificar se o nome está vazio
    if(nameInput.value === "") {
        alert("Favor, preencha seu nome.");
        return;
    }

    // Verificar se o e-mail está preenchido e se é válido
    if(emailInput.value === "" || !isEmailValid(emailInput.value)) {
        alert("Favor, preencha seu email.");
        return;
        
    }

    // Verificar se está preenchida
        if(!validatePassword(passwordInput.value, 8)) {
            alert("Senha precisa no mínimo de 8 dígitos!");
        return;
    }

    // Verificar se a situação foi selecionada
    if(jobSelect.value === "") {
        alert("Favor, selecione a sua situação");
        return;
    }

    // Verificar se a mensagem está preenchida 
        if(messageTextarea.value === "") {
            alert("Favor, escreva uma mensagem.")
            return;
        }

    // Se todos os campos estiverem preenchidos corretamente, envie o form
    form.submit();
});


// Função que valida e-mail
function isEmailValid(email) {
    // cria uma regex para validar email
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-z]{2,}$/
    );

    if (emailRegex.test(email)) {
        return true;
    }

    return false;
}

// Função que valida a senha 
function validatePassword(password, minDigits) {
    if(password.length >= minDigits) {
        // senha válida
        return true;

    }
        // senha inválida 
        return false;
} 
