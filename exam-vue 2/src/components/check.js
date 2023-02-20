export 
function checkDate(payload) {
    if (!validateEmail(payload.email)) {
        alert("Incorrect email!")
        return false
    } if (!validatePassword(payload.password)) {
        alert("Incorrect password!")
        return false
    } if (!validateAge(payload.age)) {
        alert("Incorrect age!")
        return false
    } else if (payload.name.length < 1 || payload.surname.length < 1 || payload.password.length < 1 || payload.age.length < 1) {
        alert("Complete all data!")
        return false;
    } else {
        return true
    }

}
const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};
const validatePassword = (password) => {
    return String(password)
        .match(
            /^\S*(?=.*[A-Z])(?=.*[0-9])(?=.*[/$!*])[a-zA-Z0-9*/$!]{8,}\S*$/g
        );
};
const validateAge = (age) => {
    return String(age)
        .match(
            /^[1-9][0-9]$|^[1-9]$|^100$/
        );
};
