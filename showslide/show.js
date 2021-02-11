const menu_medeuim = document.querySelector('#menu_medeuim');
menu_medeuim.addEventListener('click', () => {
    showMenuBlock();
});
const menu_small = document.querySelector('#menu_small');
menu_small.addEventListener('click', () => {
    showMenuBlock();
});
const showMenu = document.querySelector('.showmenu');
const contentOfHeader = document.querySelector('.contentOfHeader');

function closeMenuBlock() {
    contentOfHeader.style.display = "block";
    showMenu.style.height = "0%";
}

function showMenuBlock() {
    contentOfHeader.style.display = "none";
    showMenu.style.height = "100%";
}

const selectEmployees = document.getElementById("employees");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const phone_number = document.getElementById("phone_number");
const company_name = document.getElementById("company_name");
const company_website = document.getElementById("company_website");
const jop_title = document.getElementById("jop_title");
const user = [fname, lname, company_name, company_website, jop_title, email, phone_number];

const btn = document.getElementById("btn");
btn.addEventListener('click', () => {

    for (let userIndex = 0; userIndex < user.length; userIndex++) {
        if (user[userIndex].className == "usernotvaild") {
            user[userIndex].className = "user";
        }
    }
    selectEmployees.style.border = "1px solid black";
    examineError(user);
});

function examineError(user) {

    for (let index = 0; index < user.length; index++) {
        if (user[index].value == "") {
            user[index].className += "notvaild";
        } else

        if (user[index].id == 'email') {
            let matchEmail = validateEmail(user[index].value);
            if (matchEmail == false) {
                email.className += "notvaild";
            }
        } else
        if (user[index].id == 'phone_number') {
            let matchPhone = validatePhoneNumber(user[index].value);
            if (matchPhone == false) {
                phone_number.className += "notvaild";
            }
        }
    }

    if (selectEmployees.value == "Please select") {
        selectEmployees.style.border = "1px solid red";
    }
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validatePhoneNumber(input_str) {
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return re.test(input_str);
}

function changeInput(inputIndex) {
    user[inputIndex].className = "user";
    if (user[inputIndex].value == "") {
        user[inputIndex].className += "notvaild";
    } else if (user[inputIndex].id == "email") {
        let emailuser = user[inputIndex].value;
        let matchEmail = validateEmail(emailuser);
        if (matchEmail == false) {
            user[inputIndex].className += "notvaild";
        }
    } else if (user[inputIndex].id == "phone_number") {
        let phoneuser = user[inputIndex].value;
        let matchPhone = validatePhoneNumber(phoneuser);
        if (matchPhone == false) {
            user[inputIndex].className += "notvaild";
        }
    }
}

function checkError() {
    if (selectEmployees.value == "Please select") {
        selectEmployees.style.border = "1px solid red";
    } else {
        selectEmployees.style.border = "1px solid black";
    }
}