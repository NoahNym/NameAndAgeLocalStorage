const nameEl = document.querySelector('.name');
const editBtn = document.querySelector('.edit-btn');
const popup = document.querySelector('.popup');
const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const ageInput = document.getElementById('age');
const saveBtn = document.getElementById('save-btn');
const cancelBtn = document.getElementById('cancel-btn');

// Retrieve user info from local storage if it exists
const savedUserInfo = JSON.parse(localStorage.getItem('userInfo'));
if (savedUserInfo) {
  nameEl.textContent = `${savedUserInfo.firstName} ${savedUserInfo.lastName}, ${savedUserInfo.age}`;
}

editBtn.addEventListener('click', () => {
  popup.style.display = 'block';
  const name = nameEl.textContent.split(', ')[0];
  const age = nameEl.textContent.split(', ')[1];
  firstNameInput.value = name.split(' ')[0];
  lastNameInput.value = name.split(' ')[1];
  ageInput.value = age;
});

cancelBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});

saveBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const firstName = firstNameInput.value;
  const lastName = lastNameInput.value;
  const age = ageInput.value;
  nameEl.textContent = `${firstName} ${lastName}, ${age}`;
  popup.style.display = 'none';

  // Save user info to local storage
  const userInfo = { firstName, lastName, age };
  localStorage.setItem('userInfo', JSON.stringify(userInfo));
});
