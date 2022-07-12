const formName = document.getElementById("contactMe-name");
const formEmail = document.getElementById("contactMe-email");
const formIssue = document.getElementById("contactMe-issue");
const formMessage = document.getElementById("contactMe-message");
const formSubmitBtn = document.getElementById("contactMe-submitBtn");

let nameValid = false,
    emailValid = false,
    issueValid = false,
    msgValid = false;

formSubmitBtn.disabled = true;
formSubmitBtn.classList.add("btn-primary-disable");

formName.addEventListener("focusout", (event) => {
    let nameRegEx = /^[a-zA-Z ]/g;
    let inputValue = formName.value;

    if (
        inputValue.trim() === "" ||
        !inputValue.match(nameRegEx) ||
        inputValue.length > 50
    ) {
        if (!formName.classList.contains("contactMe-input-error")) {
            formName.classList.add("contactMe-input-error");
        }
        nameValid = false;
    } else {
        if (formName.classList.contains("contactMe-input-error")) {
            formName.classList.remove("contactMe-input-error");
        }
        nameValid = true;
    }
    submitBtnState();
});

formEmail.addEventListener("focusout", (event) => {
    let emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    let inputValue = formEmail.value;

    if (!inputValue.match(emailRegEx)) {
        if (!formEmail.classList.contains("contactMe-input-error")) {
            formEmail.classList.add("contactMe-input-error");
        }
        emailValid = false;
    } else {
        if (formEmail.classList.contains("contactMe-input-error")) {
            formEmail.classList.remove("contactMe-input-error");
        }
        emailValid = true;
    }
    submitBtnState();
});

formIssue.addEventListener("focusout", (event) => {
    let inputValue = formIssue.value;

    if (inputValue.trim() === "" || inputValue.length > 50) {
        if (!formIssue.classList.contains("contactMe-input-error")) {
            formIssue.classList.add("contactMe-input-error");
        }
        issueValid = false;
    } else {
        if (formIssue.classList.contains("contactMe-input-error")) {
            formIssue.classList.remove("contactMe-input-error");
        }
        issueValid = true;
    }
    submitBtnState();
});

formMessage.addEventListener("focusout", (event) => {
    let inputValue = formMessage.value;

    if (inputValue.trim() === "" || inputValue.length > 300) {
        if (!formMessage.classList.contains("contactMe-input-error")) {
            formMessage.classList.add("contactMe-input-error");
        }
        msgValid = false;
    } else {
        if (formMessage.classList.contains("contactMe-input-error")) {
            formMessage.classList.remove("contactMe-input-error");
        }
        msgValid = true;
    }
    submitBtnState();
});

function checkInputValidity() {}

function submitBtnState() {
    if (
        nameValid === true &&
        emailValid === true &&
        issueValid === true &&
        msgValid === true
    ) {
        formSubmitBtn.disabled = false;
        if (formSubmitBtn.classList.contains("btn-primary-disable")) {
            formSubmitBtn.classList.remove("btn-primary-disable");
        }
        if (!formSubmitBtn.classList.contains("btn-primary")) {
            formSubmitBtn.classList.add("btn-primary");
        }
    } else {
        formSubmitBtn.disabled = true;
        if (!formSubmitBtn.classList.contains("btn-primary-disable")) {
            formSubmitBtn.classList.add("btn-primary-disable");
        }
        if (formSubmitBtn.classList.contains("btn-primary")) {
            formSubmitBtn.classList.remove("btn-primary");
        }
    }
}
