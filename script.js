const input = document.getElementById("box2");
const copyText = document.getElementById("copy")
let uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
let symbolChars = "!@#$%^&*()_-+={}[];:'\"<>,.?\\|/~`";
let numberChars = "0123456789";


function copy() {

    if (input.value) {
        navigator.clipboard.writeText(input.value)
            .then(() => alert('Text copied to clipboard'))
            .catch(err => alert('Could not copy text: ' + err));

    }


}

function generatePassword() {

    const length = document.getElementById('length').value
    const symbol = document.getElementById('symbol').checked
    const number = document.getElementById('number').checked
    const uppercase = document.getElementById('uppercase').checked
    const lowercase = document.getElementById('lowercase').checked

    let char = ''

    if (symbol) {
        char += symbolChars
    }
    if (number) {
        char += numberChars
    }
    if (uppercase) {
        char += uppercaseChars
    }
    if (lowercase) {
        char += lowercaseChars
    }

    let password = '';

    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * char.length)
        password += char.charAt(randomIndex)
        console.log(password)
    }



    input.value = password;
}