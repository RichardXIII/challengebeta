// JavaScript para validação de formulário
document.querySelector('form').addEventListener('submit', function(event) {
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;

    if (!usuario || !senha) {
      event.preventDefault();
      alert('Por favor, preencha todos os campos.');

    }
  });