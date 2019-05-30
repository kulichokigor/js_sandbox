//*js
const button = document.querySelector('button');
const div = document.querySelector('.box');
const img = document.querySelector('img');

button.addEventListener('click', function () {
	div.style.display = 'block'
});

img.addEventListener('click', function () {
	div.style.display = 'none'
});
