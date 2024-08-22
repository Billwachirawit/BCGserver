function showLogin() {
    document.querySelector('.select-container').style.display = 'none';
    document.querySelector('.form-container').style.display = 'block';
    document.getElementById('login-form').classList.remove('hidden');
    document.getElementById('register-form').classList.add('hidden');
}

function showRegister() {
    document.querySelector('.select-container').style.display = 'none';
    document.querySelector('.form-container').style.display = 'block';
    document.getElementById('register-form').classList.remove('hidden');
    document.getElementById('login-form').classList.add('hidden');
}

function showSelection() {
    document.querySelector('.select-container').style.display = 'block';
    document.querySelector('.form-container').style.display = 'none';
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('register-form').classList.add('hidden');
}
