var randomEmail = require('random-email');
var validator = require("email-validator");

console.log(randomEmail())


const generate = document.querySelector('.generate');
const mailBox = document.querySelector('.mail-block');
const close = document.querySelector('.close');
const email = document.querySelector('#viev-mail');

generate.addEventListener('click', function(){
    mailBox.style.display = 'block';
    email.value = randomEmail();
});

close.addEventListener('click', function(){
    mailBox.style.display = 'none';
});

const validMail = document.querySelector('#validate-mail');
validMail.addEventListener('change', function(){
	if(validator.validate(document.querySelector('#viev-mail').value)){
		validMail.style.border = "2px solid green"
	}else{
		validMail.style.border = "2px solid red"
	}
});


