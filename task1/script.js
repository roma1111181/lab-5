var form = document.getElementById('form');
var body = document.querySelector('body')
var summary = document.createElement('div')
summary.setAttribute('id', 'summary')
var allGood = true;
var badFields = [];
var goodFields = [];

// reseting everything back to start
function resetState() {
    // removing red colors from input fields
    badFields.forEach(id => {
        let element = document.getElementById(id)
        element.style.border = '2px grey solid';
        element.style.backgroundColor = '#fff';
    });
    // removing correct inputs from summary
    while(summary.firstChild) {
        summary.removeChild(summary.firstChild)
    }
    // reseting variables
    allGood = true;
    badFields = [];
    goodFields = [];
};

// validationg by regex
function isValid(id, regex, name) {
    let text = document.getElementById(id).value
    // if everything is ok, creating an element that will be displayed
    if (text.match(regex)) {
        let item = document.createElement('p');
        item.innerHTML = '<b>' + name + '</b>: ' + text;
        goodFields.push(item);
    }
    // if something goes wrong changing boolean variable and adding this field to a list
    else {
        allGood = false;
        badFields.push(id);
    }
};


function validate() {
    resetState();
    isValid('pib', /^[A-ZА-ЯІЇЄ][a-zA-ZА-ЯІЇЄа-яіїє]+ [A-ZА-ЯІЇЄ]\.[A-ZА-ЯІЇЄ]\.$/, 'ПІБ');
    isValid('faculty', /^[A-ZА-ЯІЇЄ]+$/, 'Факультет');
    isValid('birthdate',  /^(?:0[1-9]|[12]\d|3[01])([\/.-])(?:0[1-9]|1[012])\1(?:19|20)\d\d$/, 'Дата народження');
    isValid('address', /^м\.\s[А-ЯІЇЄ][а-яіїє]{1,15}$/, 'Адреса');
    isValid('email', /^\w+@\w+\.\w+$/, 'E-mail');
    if (allGood) {
        let x = document.createElement('h3')
        x.innerHTML = 'Введені дані:'
        summary.appendChild(x)
        goodFields.forEach(item => {
            summary.appendChild(item);
        })
        body.appendChild(summary)
    }
    else {
        badFields.forEach(id => {
            let element = document.getElementById(id)
            element.style.border = '2px red solid';
            element.style.backgroundColor = '#ffcbc7';
        })
    }
};