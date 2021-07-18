function validarEmail(email) {
    let validaRegEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(email.match(validaRegEx)) {
        return true;
    } else {
        return false;
    }
}     
function enviaEmail(){
    let email = document.getElementById("email").value;
    if(validarEmail(email)){
        /* VALIDA SE O E-MAIL JÁ NÃO ESTA CADASTRADO */
        let emailArmazenado = localStorage.getItem('email');
        if(emailArmazenado!=email){
            localStorage.setItem('email',email);
            alert("E-mail cadastrado com sucesso!");
        } else {
            alert("Você já esta cadastrado! Utilize outro e-mail!");
        }
    } else {
        alert("Você não informou um e-mail válido!");
    }            
}