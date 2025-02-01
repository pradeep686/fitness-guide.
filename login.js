
  
  // Initialize Firebase
    const loginCard = document.getElementById('login-card');
    const signupCard = document.getElementById('signup-card');

    // Toggle to Sign-Up Form
    document.getElementById('to-signup').addEventListener('click', () => {
    loginCard.classList.add('hidden');
    signupCard.classList.remove('hidden');
    });

    // Toggle to Login Form
    document.getElementById('to-login').addEventListener('click', () => {
    signupCard.classList.add('hidden');
    loginCard.classList.remove('hidden');
    });
  
  // Sign-Up Form Submission
  
  