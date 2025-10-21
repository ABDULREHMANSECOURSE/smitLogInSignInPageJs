function togglePasEye() {
    if (passinp.type === 'password') {
        passinp.type = 'text';
        pasEye.src = 'assets/eyeoff.png';
    } else {
        passinp.type = 'password';
        pasEye.src = 'assets/eyeon.png';
    }
}
const passinp = document.querySelector('.password-inp');
const pasEye = document.querySelector('.pas-eye');

pasEye.addEventListener('click', togglePasEye);



function createAccount() {
    const email = document.querySelector('.email-inp').value;
    const password = document.querySelector('.password-inp').value;
    const createAccount = document.querySelector('.create-account')
    const createProfile = document.querySelector('.create-profile')

    for (let i = 0; i < password.length; i++) {
        if (password[i] === " ") {
            alert("Space is not allowed in password");
            return;
        }
    }
    if (password.length >= 8) {
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        // createAccount.style.display = "none"
        // createProfile.style.display = "flex"
    } else {
        alert("password must be 8 charector")
        return;
    }

}

const button = document.getElementById("button");
button.addEventListener('click', createAccount);

function createProfile() {
    const fName = document.querySelector('#fname')
    const lName = document.querySelector('#lname')

    if (fName.value.length >= 3 && fName.value.length <= 12) {
        localStorage.setItem('fName', fName.value)
        fName.style.border = "none"
    } else {
        fName.style.border = "2px solid red"
        return;
    }
    if (lName.value.length >= 3 && lName.value.length <= 12) {
        localStorage.setItem('lName', lName.value)
        lName.style.border = "none"
    } else {
        lName.style.border = "2px solid red"
        return;
    }

    const gender = document.querySelector('input[name="gender"]:checked');
    localStorage.setItem('gender',gender.value)

    const dob = document.querySelector('#dob').value
    localStorage.setItem('dob', dob)

    const phoneNumber = document.querySelector('#phoneNumber').value

    localStorage.setItem('phoneNumber', phoneNumber)

    // document.querySelector('.create-profile').style.display = "none"
    // document.querySelector('.profile').style.display = "flex"
}

document.querySelector('.save-profile').addEventListener('click', createProfile)

if (localStorage.getItem('email') && localStorage.getItem('password')) {
    document.querySelector('.create-account').style.display = "none"
    document.querySelector('.create-profile').style.display = "flex"
}
if (localStorage.getItem('fName') && localStorage.getItem('lName') && localStorage.getItem('gender') && localStorage.getItem('dob') && localStorage.getItem('phoneNumber')) {
    document.querySelector('.create-profile').style.display = "none"
    document.querySelector('.profile').style.display = "flex"
}

document.querySelector('.pName').textContent = localStorage.getItem('fName') + ' ' + localStorage.getItem('lName')
    document.querySelector('.pDob').textContent = localStorage.getItem('dob')
    document.querySelector('.pGender').textContent = localStorage.getItem('gender')
    document.querySelector('.pEmail').textContent = localStorage.getItem('email')
    document.querySelector('.pNumber').textContent = localStorage.getItem('phoneNumber')