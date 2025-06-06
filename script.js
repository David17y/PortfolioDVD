// script.js

// 1. Inicializa o EmailJS com sua chave pública (User ID)
(function() {
    emailjs.init("PWrljFPIIc5VjhDoD"); // ex: "user_AbCdEfGhIjKlMnOp"
  })();
  
  // Aguarda o DOM carregar
  document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    const confirmationBox = document.getElementById("confirmation");
    const spanName = document.getElementById("confirmName");
    const spanEmail = document.getElementById("confirmEmail");
    const spanMessage = document.getElementById("confirmMessage");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // evita reload automático
  
      // Pega os valores do formulário
      const nameValue = form.elements["name"].value.trim();
      const emailValue = form.elements["email"].value.trim();
      const messageValue = form.elements["message"].value.trim();
  
      // Validações básicas (podem ser expandidas conforme necessidade)
      if (!nameValue || !emailValue || !messageValue) {
        alert("Por favor, preencha todos os campos antes de enviar.");
        return;
      }
  
      // Prepara os parâmetros que vão no template
      const templateParams = {
        name: nameValue,
        time: emailValue,
        message: messageValue
        // Caso no seu template exista algo como subject, você pode adicionar:
        // subject: "Novo contato pelo portfólio"
      };
  
      // Envia usando emailjs.send (serviceID, templateID, templateParams)
      emailjs.send("service_3dx5pxl", "template_8i5n23k", templateParams)
        .then(function(response) {
          // Se der certo, exibe a caixa de confirmação e preenche os dados
          spanName.textContent = nameValue;
          spanEmail.textContent = emailValue;
          spanMessage.textContent = messageValue;
  
          confirmationBox.classList.remove("hidden");
          form.reset(); // limpa campos do formulário
  
          // Opcional: após X segundos, reesconde a confirmação
          setTimeout(() => {
            confirmationBox.classList.add("hidden");
          }, 10000); // 10 segundos
        }, function(error) {
          console.error("Erro ao enviar a mensagem:", error);
          alert("Ocorreu um erro ao enviar sua mensagem. Tente novamente mais tarde.");
        });
    });
  });
  