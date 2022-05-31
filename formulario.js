document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    var nombre = document.getElementById('nombre').value;
    if(nombre.length == 0) {
      alert('¡No escribiste tu nombre!');
      return;
    }
    var mail = document.getElementById('mail').value;
    if (mail.length == 0) {
      alert('¡No escribiste tu correo electrónico!');
      return;
    }
    this.submit();
  }