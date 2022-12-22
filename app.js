
const bankName = document.querySelector('.bank-name');
const bankNameInput = document.querySelector('#bank-name');

const card_owner = document.querySelector(".owner-name");
const owner_input = document.querySelector("#owner-name");

const card_number = document.querySelector(".card-number");
const card_number_input = document.querySelector("#card-number");

const ValidDate = document.querySelector(".valid-date .date");
const valid_input = document.querySelector("#validate");

const cvc_code = document.querySelector(".code");
const cvc_code_input = document.querySelector("#cvc-code");

const form = document.querySelector('form');

form.addEventListener("submit", (e) => {
    e.preventDefault()
})

// Bank Name
bankNameInput.addEventListener('input', (e) => {
    let formatStr = e.target.value;

    bankName.textContent = formatStr;

    if (bankName.innerHTML.trim() === "") {
        bankName.textContent = "Bank Name"
    }
});

// Card Name
owner_input.addEventListener("input", (e) => {
    let formatStr = e.target.value;

    card_owner.textContent = formatStr;

    if (card_owner.innerHTML.trim() === "") {
        card_owner.textContent = "Owner Name"
    }
});

// Card Number
card_number_input.addEventListener("input", (e) => {
    let formatStr = e.target.value.trim().split("").map((data, index) => {
        if ((index + 1) % 4 === 0) {
            data = data + " ";
        }
        return data
    })
    card_number.textContent = formatStr.join("")

    if (card_number.innerHTML.trim() === "") {
        card_number.textContent = "0123 2345 5678 9000"
    }
});

// Card Validate
valid_input.addEventListener('input', (e) => {
    let formatStr = e.target.value.trim().split('').map((data, index) => {
        if ((index + 1) % 2 == 0 && index + 1 !== 4) {
            data = data + "/"
        }
        return data
    })
    ValidDate.textContent = formatStr.join("")

    if (ValidDate.innerHTML.trim() === "") {
        ValidDate.textContent = "07/22"
    };
});

// CVC Code
cvc_code_input.addEventListener("input", (e) => {
    let formatStr = e.target.value;

    cvc_code.textContent = formatStr
    if (cvc_code.innerHTML.trim() === "") {
        cvc_code.innerHTML = "xxx"
    }
})