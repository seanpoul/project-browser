const email = document.getElementById('email')
const country = document.getElementById('country')
const postal = document.getElementById('postal')
const password = document.getElementById('password')
const passwordCheck = document.getElementById('passwordCheck')

const emailPattern = new RegExp("^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$", "gm");
const countryPattern = new RegExp("[a-zA-Z]+");
const postalPattern = new RegExp("^(?!.*[DFIOQU])[A-VXY][0-9][A-Z] ?[0-9][A-Z][0-9]$")

email.required = true
country.required = true
postal.required = true
password.required = true
passwordCheck.required = true

email.addEventListener('input', () => {
    if (!email.value.match(emailPattern)) {
        email.setCustomValidity('Must follow email pattern of "xxx@yyy.zzz"')
    } else {
        email.setCustomValidity("")
    }
})

country.addEventListener('input', () => {
    if (!country.value.match(countryPattern)) {
        country.setCustomValidity('Must be a country. Letters only')
    } else {
        country.setCustomValidity("")
    }
})

postal.addEventListener('input', () => {
    if (!postal.value.match(postalPattern)) {
        postal.setCustomValidity('Must be capitalized. Does not match pattern of 1A2 B2C')
    } else {
        postal.setCustomValidity("")
    }
})

password.addEventListener('input', () => {
    if (passwordCheck.value !== password.value) {
        password.setCustomValidity('Passwords do not match!')
        passwordCheck.setCustomValidity('Passwords do not match!')
    } else if (passwordCheck.value == password.value) {
        password.setCustomValidity("")
        passwordCheck.setCustomValidity("")
    }
})

passwordCheck.addEventListener('input', () => {
    if (passwordCheck.value !== password.value) {
        password.setCustomValidity('Passwords do not match!')
        passwordCheck.setCustomValidity('Passwords do not match!')
    } else if (passwordCheck.value == password.value) {
        password.setCustomValidity("")
        passwordCheck.setCustomValidity("")
    }
})