const email = document.getElementById('email')
const country = document.getElementById('country')
const postal = document.getElementById('postal')
const password = document.getElementById('password')
const passwordCheck = document.getElementById('passwordCheck')

const emailPattern = new RegExp("/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm");
const countryPattern = new RegExp("[a-zA-Z]+");
const postalPattern = new RegExp("/^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i")

email.addEventListener('input', () => {
    // email.setCustomValidity("")
    if (email.validity.patternMismatch === emailPattern) {
        email.setCustomValidity('Must follow email pattern of "xxx@yyy.zzz"')
    } else {
        email.setCustomValidity("")
    }
})

country.addEventListener('input', () => {
    // console.log(country.validity.valid)
    console.log(country.validity.patternMismatch)
    console.log()
    country.setCustomValidity("")
    if (country.validity.patternMismatch !== countryPattern) {
        console.log("country")
        country.setCustomValidity('Must be a country. Letters only')
    } else {
        country.setCustomValidity("")
    }
})

postal.addEventListener('input', () => {
    // postal.setCustomValidity("")
    if (postal.validity.patternMismatch === postalPattern) {
        postal.setCustomValidity('Does not match pattern of 1A2 B2C')
    } else {
        postal.setCustomValidity("")
    }
})

passwordCheck.addEventListener('input', () => {
    console.log(passwordCheck.value)
    console.log(password.value)
    if (passwordCheck.value != password.value) {
        console.log("check")
        passwordCheck.setCustomValidity('Passwords do not match!')
    } else {
        passwordCheck.setCustomValidity("")
    }
})