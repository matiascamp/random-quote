export default function showCustomAlert(message) {
    const customAlert = document.getElementById('customAlert');
    const alertMessage = document.getElementById('alertMessage');
  
    alertMessage.textContent = message;
    customAlert.classList.remove('hidden');
  
    const closeAlert = document.getElementById('closeAlert');
    closeAlert.addEventListener('click', () => {
      customAlert.classList.add('hidden');
    });
  }
  
  