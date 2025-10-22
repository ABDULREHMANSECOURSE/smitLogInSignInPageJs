function togglePasEye() {
    if (passinp.type === 'password') {
        passinp.type = 'text';
        pasEye.src = 'assets/eyeoff.png';
    } else {
        passinp.type = 'password';
        pasEye.src = 'assets/eyeon.png';
    }
}
const passinp = document.querySelector('#password');
const pasEye = document.querySelector('#passEye');

pasEye.addEventListener('click', togglePasEye);



function togglePasEyeS() {
    if (passwordS.type === 'password') {
        passwordS.type = 'text';
        eyeS.src = 'assets/eyeoff.png';
    } else {
        passwordS.type = 'password';
        eyeS.src = 'assets/eyeon.png';
    }
}
const passwordS = document.querySelector('#passwordS')
const eyeS = document.querySelector('#eyeS')

eyeS.addEventListener('click', togglePasEyeS);

const dontHaveAccount = document.querySelector('.dontHaveAccount')

const haveAccount = document.querySelector('.haveAccount')

function dontHaveAccountFunc(){
    document.querySelector('#logIn').style.display = "none"
    document.querySelector('#signUp').style.display = "flex"
}

dontHaveAccount.addEventListener('click', dontHaveAccountFunc)

function haveAccountFunc() {
    document.querySelector('#logIn').style.display = "flex"
    document.querySelector('#signUp').style.display = "none"
}

haveAccount.addEventListener('click', haveAccountFunc)

function singUp() {

    const user = {}

    const fName = document.querySelector('#fname')
    const lName = document.querySelector('#lname')

    if (fName.value.length >= 3 && fName.value.length <= 12) {
        fName.style.border = "none";
        user.fName = fName.value;
    } else {
        fName.style.border = "2px solid red";
        return;
    }
    if (lName.value.length >= 3 && lName.value.length <= 12) {
        lName.style.border = "none";
        user.lName = lName.value;
    } else {
        lName.style.border = "2px solid red";
        return;
    }


    const gender = document.querySelector('#gender')

    if (gender.value !== 'select gender') {
        user.gender = gender.value
    } else {
        alert('select gender')
        return;
    }

    const emailS = document.querySelector('#emailS').value

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (emailS.length >= 3 && emailS.length <= 254 && emailRegex.test(emailS)) {
        user.email = emailS
    } else {
        alert('enter a valid email')
        return;
    }

    const password = document.querySelector('#passwordS').value

    for (let i = 0; i < password.length; i++) {
        if (password[i] === " ") {
            alert("Space is not allowed in password");
            return;
        }
    }
    if (password.length >= 8) {
        user.password = password
    } else {
        alert("password must be 8 charector")
        return;
    }

    const dob = document.querySelector('#dob').value

    if (dob.length == 10) {
        user.dob = dob
    } else {
        alert('enter valid date of birth')
        return;
    }

    const phoneNumberRegex = /^((\+92|0092|92)?(0)?)(3)([0-9]{9})$/
    const phoneNumber = document.querySelector('#phoneNumber').value

    if (phoneNumberRegex.test(phoneNumber)) {
        user.phoneNumber = phoneNumber
    } else {
        alert('incorrect phone number')
        return;
    }

    const accounts = JSON.parse(localStorage.getItem('accounts')) || [];

    accounts.push(user)

    localStorage.setItem('accounts', JSON.stringify(accounts))

    
}

document.querySelector('.save-profile').addEventListener('click', singUp)