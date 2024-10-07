document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', async function (event) {
            event.preventDefault();

            const formData = new FormData(loginForm);
            const username = formData.get('username');
            const password = formData.get('password');

            try {
                const response = await fetch('/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ username, password })
                });

                const data = await response.json();
                if (data.success) {
                    // Redirect to dashboard
                    window.location.href = '/dashboard';
                } else {
                    alert(data.message);
                }
                loginForm.reset();
            } catch (error) {
                console.error('Error:', error);
            }
        });
    } else {
        console.error('Login form not found');
    }
});
