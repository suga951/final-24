document.getElementById('reset-password-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;
  const errorMessage = document.getElementById('error-message');

  if (password !== confirmPassword) {
    errorMessage.style.display = 'block';
    return; // No envía el formulario si las contraseñas no coinciden
  } else {
    errorMessage.style.display = 'none';
  }

  // Enviar la nueva contraseña al servidor o Firebase
  try {
    const response = await fetch('/api/forgot-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });
    

    if (response.ok) {
      alert('Contraseña restablecida exitosamente');
      // Redirigir al usuario a la página de inicio de sesión o donde prefieras
      window.location.href = '/';
    } else {
      alert(data.error || 'Error al restablecer la contraseña');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Ocurrió un error inesperado');
  }
});
