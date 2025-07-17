// This is a placeholder for JavaScript functionality.
// Add your interactive scripts here as needed.

document.addEventListener('DOMContentLoaded', () => {
    // Handle Login Form Submission
    const loginForm = document.querySelector('form');
    if (loginForm && window.location.pathname.includes('login_ko.html')) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent default form submission

            const usernameInput = document.getElementById('username');
            const passwordInput = document.getElementById('password');
            const messageDiv = document.getElementById('login-message');

            const username = usernameInput.value;
            const password = passwordInput.value;

            // Simple client-side validation (for demonstration)
            if (username === 'testuser' && password === 'password123') {
                messageDiv.textContent = '로그인 성공!';
                messageDiv.style.color = 'green';
                // In a real application, you would redirect or set a session here
                // window.location.href = 'profile_ko.html';
            } else if (username !== 'testuser') {
                messageDiv.textContent = '회원가입 정보가 없는 아이디입니다.';
                messageDiv.style.color = 'red';
            } else {
                messageDiv.textContent = '비밀번호가 틀렸습니다.';
                messageDiv.style.color = 'red';
            }
        });
    }

    // Handle Sign Up Form Submission
    const signupForm = document.querySelector('form');
    if (signupForm && window.location.pathname.includes('signup_ko.html')) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent default form submission

            const usernameInput = document.getElementById('username');
            const passwordInput = document.getElementById('password');
            const confirmPasswordInput = document.getElementById('confirm-password');
            const messageDiv = document.getElementById('signup-message');

            const username = usernameInput.value;
            const password = passwordInput.value;
            const confirmPassword = confirmPasswordInput.value;

            if (password !== confirmPassword) {
                messageDiv.textContent = '비밀번호가 일치하지 않습니다.';
                messageDiv.style.color = 'red';
            } else if (username.length < 4) {
                messageDiv.textContent = '아이디는 4자 이상이어야 합니다.';
                messageDiv.style.color = 'red';
            } else {
                messageDiv.textContent = '회원가입 성공! 이제 로그인할 수 있습니다.';
                messageDiv.style.color = 'green';
                // In a real application, you would send data to a backend
                // and then redirect to login page
                // setTimeout(() => { window.location.href = 'login_ko.html'; }, 2000);
            }
        });
    }
});