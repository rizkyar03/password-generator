const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numberChars = '0123456789';
const symbolChars = '!-$^+_';
const spaceChar = ' ';

function getRandomChars(chars) {
    const index = Math.floor(Math.random() * chars.length);
    return chars[index];
}

function generatePassword() {
    const passwordInput = document.getElementById('password');
    const lowercaseCheckbox = document.getElementById('lowercase');
    const uppercaseCheckbox = document.getElementById('uppercase');
    const numbersCheckbox = document.getElementById('numbers');
    const symbolsCheckbox = document.getElementById('symbols');
    const duplicatesCheckbox = document.getElementById('duplicate');
    const spacesCheckbox = document.getElementById('spaces');

    let characters = '';
    if (lowercaseCheckbox.checked) characters += lowercaseChars;
    if (uppercaseCheckbox.checked) characters += uppercaseChars;
    if (numbersCheckbox.checked) characters += numberChars;
    if (symbolsCheckbox.checked) characters += symbolChars;
    if (spacesCheckbox.checked) characters += spaceChar;

    if (characters === '') {
        passwordInput.value = '';
        return;
    }

    let password = '';
    const length = 12;

    while (password.length < length) {
        let char = getRandomChars(characters);
        if (duplicatesCheckbox.checked && password.includes(char)) continue;
        password += char;
    }

    passwordInput.value = password;
}

function copyPassword() {
    const passwordInput = document.getElementById('password');
    const copyButton = document.getElementById('copy');

    passwordInput.disabled = false;

    passwordInput.select();
    document.execCommand('copy');
    passwordInput.disabled = true;

}