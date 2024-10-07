document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.getElementById('signupForm');

    if (signupForm) {
        signupForm.addEventListener('submit', async function (event) {
            event.preventDefault();

            const formData = new FormData(signupForm);
            const username = formData.get('username');
            const password = formData.get('password');

            try {
                const response = await fetch('/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ username, password })
                });

                const data = await response.json();
                alert(data.message);
                signupForm.reset();
            } catch (error) {
                console.error('Error:', error);
            }
        });
    } else {
        console.error('Signup form not found');
    }
});
