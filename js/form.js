// Modern login/signup form interactivity and validation

document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');
  const signUpBtn = document.getElementById('signUpBtn');
  const toSignUp = document.getElementById('toSignUp');
  const toSignIn = document.getElementById('toSignIn');
  const errorMsg = document.getElementById('errorMsg');
  const forgotModal = document.getElementById('forgotModal');
  const closeModal = document.getElementById('closeModal');
  const forgotForm = document.getElementById('forgotForm');
  const forgotMsg = document.getElementById('forgotMsg');
  const forgotLinks = document.querySelectorAll('.forgot');
  const signUpLink = document.getElementById('signUpLink');

  // Show signup form
  function showSignup() {
    if (loginForm && signupForm) {
      loginForm.classList.remove('active');
      signupForm.classList.add('active');
    }
  }
  // Show login form
  function showLogin() {
    if (loginForm && signupForm) {
      signupForm.classList.remove('active');
      loginForm.classList.add('active');
    }
  }

  if (signUpBtn) signUpBtn.addEventListener('click', showSignup);
  if (toSignUp) toSignUp.addEventListener('click', showSignup);
  if (toSignIn) toSignIn.addEventListener('click', showLogin);

  // Asegura que el enlace funcione incluso si se recarga el DOM
  document.addEventListener('click', function(e) {
    if (e.target && e.target.id === 'signUpLink') {
      e.preventDefault();
      showSignup();
    }
  });

  // Basic login validation
  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const email = document.getElementById('loginEmail').value.trim();
      const pass = document.getElementById('loginPassword').value.trim();
      if (!email || !pass) {
        if (errorMsg) {
          errorMsg.textContent = 'Please fill in all fields.';
          errorMsg.style.display = 'block';
        }
        return;
      }
      // Simulate login success
      if (errorMsg) {
        errorMsg.textContent = 'Login successful!';
        errorMsg.style.background = '#e2f7e2';
        errorMsg.style.color = '#31708f';
        setTimeout(() => {
          errorMsg.textContent = 'Enter your personal details to use all of this';
          errorMsg.style.background = '';
          errorMsg.style.color = '';
        }, 2000);
      }
      // Here you would handle real login
    });
  }

  // Basic signup validation
  if (signupForm) {
    signupForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const email = document.getElementById('signupEmail').value.trim();
      const pass = document.getElementById('signupPassword').value.trim();
      const pass2 = document.getElementById('signupPassword2').value.trim();
      if (!email || !pass || !pass2) {
        alert('Please fill in all fields.');
        return;
      }
      if (pass !== pass2) {
        alert('Passwords do not match.');
        return;
      }
      alert('Signup successful!');
      showLogin();
    });
  }

  // Mostrar modal al hacer clic en cualquier enlace 'Forgot password?'
  if (forgotLinks && forgotLinks.length && forgotModal && forgotForm && forgotMsg) {
    forgotLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        forgotModal.style.display = 'flex';
        forgotMsg.textContent = '';
        forgotForm.reset();
      });
    });
    // Cerrar modal al hacer clic en la X
    if (closeModal) {
      closeModal.addEventListener('click', function() {
        forgotModal.style.display = 'none';
      });
    }
    // Cerrar modal al hacer clic fuera del contenido
    window.addEventListener('mousedown', function(e) {
      if (e.target === forgotModal) {
        forgotModal.style.display = 'none';
      }
    });
    // Enviar formulario de recuperación
    forgotForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = document.getElementById('forgotEmail').value.trim();
      if (!email) {
        forgotMsg.textContent = 'Please enter your email.';
        forgotMsg.style.color = '#a94442';
        return;
      }
      forgotMsg.textContent = 'If this email exists, a reset link will be sent.';
      forgotMsg.style.color = '#31708f';
      setTimeout(() => {
        forgotModal.style.display = 'none';
      }, 2000);
    });
  }
});