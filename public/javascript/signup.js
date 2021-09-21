async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector('#firstname-signup').value.trim();
  const email = document.querySelector('#lastname-signup').value.trim();
  const password = document.querySelector('#email-signup').value.trim();
  const twitter = document.querySelector('#user_id-signup').value.trim();
  const github = document.querySelector('#password-signup').value.trim();
  
  if (username && email && password) {
    const response = await fetch('/api/users', {
      method: 'post',
      body: JSON.stringify({
        firstname,
        lastname,
        email,
        user_id,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    // check the response status
    if (response.ok) {
      console.log('success');
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);