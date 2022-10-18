const form = document.querySelector('form');
form.addEventListener('submit', e => {
    const password1 = document.getElementById('password').value;
    const password2 = document.getElementById('confirm-password').value;
    if (password1 != password2) {
        e.preventDefault();
        let passwords = document.querySelectorAll('input[type=password]')
        for(let i = 0; i< passwords.length; i++) {
            passwords[i].style.boxShadow = '0 0 0 2px #941c1c';
        }
    }
});