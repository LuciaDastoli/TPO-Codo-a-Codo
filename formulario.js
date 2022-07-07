document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    var formGroupExampleInput = document.getElementById('formGroupExampleInput').value;
    if(formGroupExampleInput.length == 0) {
      alert('¡No escribiste tu nombre!');
      return;
    }

    let letras = new RegExp('^[ a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ\'\`\'\-]+$', 'i');
    if (!letras.test(formGroupExampleInput)) {
      alert("Utilizá solamente caracteres de la A a la Z (mayúsculas y minúsculas)");
      document.forms["formulario"]["formGroupExampleInput"].focus()
      return false;
     }

    var formGroupExampleInput2 = document.getElementById('formGroupExampleInput2').value;
    if (formGroupExampleInput2.length == 0) {
      alert('¡No escribiste tu correo electrónico!');
      return;
    }

   mail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (!mail.test(formGroupExampleInput2)) {
      alert("La dirección de email no es correcta");
      document.forms["formulario"]["formGroupExampleInput2"].focus()
      return false;
    }

    alert("¡Muchas gracias por enviar el formulario!");
   	document.formulario.submit();

  }

