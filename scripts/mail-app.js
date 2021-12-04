const sendEmail = async (emailData) => {
    const payload = {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(emailData)
    }
    const response = await fetch('https://web-hope-vgdz.herokuapp.com/mail/send', payload)
    return response.json()
}

const validateEmailData = (emailData) => {
  let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
  if(emailData) {
    if(emailData.toEmail.length === 0) {
      document.querySelector("#email").placeholder = 'Por favor introduce un correo electronico'
      document.querySelector("#email").focus()
      return false
    } else if(emailData.message.length === 0) {
      document.querySelector("#message").placeholder = 'Por favor introduce un comentario'
      document.querySelector("#message").focus()
      return false
    } else if(emailData.subject.length === 0) {
      document.querySelector("#name").placeholder = 'Por favor introduce un nombre'
      document.querySelector("#name").focus()
      return false
    } else if(!emailData.toEmail.match(regex)) {
      document.querySelector("#email").placeholder = 'Por favor introduce una direccion de correo electronico valida'
      document.querySelector("#email").focus()
      return false
    }
  }
  return true
}

document.getElementById("formu_info").addEventListener("submit", (e) => {
  e.preventDefault();
});


document.querySelector("#btn").addEventListener("click", () => {
  
  let email = document.querySelector("#email").value;
  let message = document.querySelector("#message").value;
  let name = document.querySelector("#name").value;

  const emailData = {
    toEmail: email,
    subject: name,
    message: message,
  };

  if(validateEmailData(emailData)){
    document.querySelector("#btn").disabled = true
    document.querySelector("#btn").innerHTML = '...'
    const myPromise = sendEmail(emailData);

    myPromise.then((data) => {
      if(data === undefined || data.status !== 200) {
        throw new Error(data)
      }
      document.querySelector("#messageResult").innerHTML =
          "Gracias por ponerse en contacto. Su mensaje ha sido enviado y pronto recibirá un correo de confirmación del mismo.";
      document.querySelector("#email").value = ''
      document.querySelector("#message").value = ''
      document.querySelector("#name").value = ''
      document.querySelector("#btn").disabled = false
      document.querySelector("#btn").innerHTML = 'Enviar'
      console.log(data);
        
    }).catch((error) => {
      document.querySelector("#messageResult").innerHTML =
          "Lo sentimos, su mensaje no pudo ser enviado, por favor intente mas tarde.";
      document.querySelector("#btn").disabled = false
      document.querySelector("#btn").innerHTML = 'Enviar'
    });
  }
});

document.querySelector("#email").addEventListener('focus', () => {
  document.querySelector("#messageResult").innerHTML = ''
})

document.querySelector("#message").addEventListener('focus', () => {
  document.querySelector("#messageResult").innerHTML = ''
})

document.querySelector("#name").addEventListener('focus', () => {
  document.querySelector("#messageResult").innerHTML = ''
})