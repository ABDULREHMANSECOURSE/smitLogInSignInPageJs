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



















// function createAccount() {
//     const email = document.querySelector('.email-inp').value;
//     const password = document.querySelector('.password-inp').value;
//     const createAccount = document.querySelector('.create-account')
//     const createProfile = document.querySelector('.create-profile')

// for (let i = 0; i < password.length; i++) {
//     if (password[i] === " ") {
//         alert("Space is not allowed in password");
//         return;
//     }
// }
// if (password.length >= 8) {
//     localStorage.setItem('email', email);
//     localStorage.setItem('password', password);
//     createAccount.style.display = "none"
//     createProfile.style.display = "flex"
// } else {
//     alert("password must be 8 charector")
//     return;
// }

// }

// const button = document.getElementById("button");
// button.addEventListener('click', createAccount);

// function createProfile() {
//

//     const gender = document.querySelector('input[name="gender"]:checked').value;
//     localStorage.setItem('gender',gender)

//     const dob = document.querySelector('#dob').value
//     localStorage.setItem('dob', dob)

//     const phoneNumber = document.querySelector('#phoneNumber').value

//     localStorage.setItem('phoneNumber', phoneNumber)

//     document.querySelector('.create-profile').style.display = "none"
//     document.querySelector('.profile').style.display = "flex"


//     document.querySelector('.pName').textContent = localStorage.getItem('fName') + ' ' + localStorage.getItem('lName')
//     document.querySelector('.pDob').textContent = localStorage.getItem('dob')
//     document.querySelector('.pEmail').textContent = localStorage.getItem('email')
//     document.querySelector('.pNumber').textContent = localStorage.getItem('phoneNumber')
//     document.querySelector('.pGender').textContent = localStorage.getItem('gender')
// }


// if (localStorage.getItem('email') && localStorage.getItem('password')) {
//     document.querySelector('.create-account').style.display = "none"
//     document.querySelector('.create-profile').style.display = "flex"
// }
// if (localStorage.getItem('fName') && localStorage.getItem('lName') && localStorage.getItem('gender') && localStorage.getItem('dob') && localStorage.getItem('phoneNumber')) {
//     document.querySelector('.create-profile').style.display = "none"
//     document.querySelector('.profile').style.display = "flex"
// }

// document.querySelector('.pName').textContent = localStorage.getItem('fName') + ' ' + localStorage.getItem('lName')
//     document.querySelector('.pDob').textContent = localStorage.getItem('dob')
//     document.querySelector('.pEmail').textContent = localStorage.getItem('email')
//     document.querySelector('.pNumber').textContent = localStorage.getItem('phoneNumber')
//     document.querySelector('.pGender').textContent = localStorage.getItem('gender')