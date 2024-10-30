const form = document.querySelector('form');
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const mensagem = document.getElementById("mensagem");
let menuMobile = document.getElementById('menu-mobile');
let btnMenu = document.getElementById('abrir-menu');

function sendEmail(){

    const bodyMessage = `nome: ${nome.value}<br> email: ${email.value}<br> telefone: ${telefone.value}<br> mensagem: ${mensagem.value}`


    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "mariaelaneb77@gmail.com",
        Password : "A11186EEF037C242499C463B849D940D0069",
        To : 'mariaelaneb77@gmail.com',
        From : "mariaelaneb77@gmail.com",
        Subject : "This is the subject",
        Body : bodyMessage
    }).then(
      message => {
        if(message == "OK"){
            Swal.fire({
                title: "Enviado",
                text: "Sua mensagem foi enviada com sucesso!",
                icon: "success"
              });
        }
      }
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
})

btnMenu.addEventListener('click', () =>{
    menuMobile.classList.add('abrir-btn-menu');
})

menuMobile.addEventListener('click', () =>{
    menuMobile.classList.remove('abrir-btn-menu');
})
