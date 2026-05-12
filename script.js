async function getProfile() {
  const response = await fetch('/get-profile');
  const user = await response.json();

  document.getElementById('name').value = user.name;
  document.getElementById('email').value = user.email;
  document.getElementById('interests').value = user.interests;
}

async function saveProfile() {
  const user = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    interests: document.getElementById('interests').value
  };

  const response = await fetch('/update-profile', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });

  const updatedUser = await response.json();

  document.getElementById('name').value = updatedUser.name;
  document.getElementById('email').value = updatedUser.email;
  document.getElementById('interests').value = updatedUser.interests;

  alert('Profile saved successfully!');
}

getProfile();