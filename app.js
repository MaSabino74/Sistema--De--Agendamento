// Define data mínima para hoje
    const dateInput = document.getElementById('date');
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);

    const form = document.getElementById('bookingForm');
    const successMessage = document.querySelector('.success-message');

    form.addEventListener('submit', function(event) {
      event.preventDefault();

      // Validação simples
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      // Pega valores
      const name = form.name.value.trim();
      const phone = form.phone.value.trim();
      const service = form.service.value;
      const date = form.date.value;
      const time = form.time.value;

      // Validação extra para telefone (regex)
      const phoneRegex = /^\$?\d{2}\$?\s?\d{4,5}-?\d{4}$/;
      if (!phoneRegex.test(phone)) {
        alert('Por favor, insira um telefone válido no formato (XX) XXXXX-XXXX');
        return;
      }

      // Formatação da data para exibir
      const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
      const formattedDate = new Date(date).toLocaleDateString('pt-BR', options);

      // Mensagem de sucesso
      successMessage.textContent = `Olá ${name}, seu agendamento para ${service} está confirmado para o dia ${formattedDate} às ${time}. Obrigado!`;
      successMessage.style.display = 'block';

      // Limpa o formulário
      form.reset();

      // Remove mensagem após 8 segundos
      setTimeout(() => {
        successMessage.style.display = 'none';
      }, 8000);
    });