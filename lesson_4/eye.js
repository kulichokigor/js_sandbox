const divMain = document.createElement('div');
const eye1 = document.createElement('div');
const pupilEye1 = document.createElement('div');
const eye2 = document.createElement('div');
const pupilEye2 = document.createElement('div');
document.body.appendChild(divMain);
divMain.appendChild(eye1);
divMain.appendChild(eye2);
eye1.className = 'eye1'
eye1.appendChild(pupilEye1);
eye2.appendChild(pupilEye2);

divMain.style.margin = '0 auto';
divMain.style.width = '205px';
divMain.style.height = '100px';

eye1.style.width = '100px';
eye1.style.height = '100px';
eye1.style.border = '1px solid #000';
eye1.style.borderRadius = '50%';
eye1.style.position = 'relative';
eye1.style.float = 'left'

pupilEye1.style.width = '30px';
pupilEye1.style.height = '30px';
pupilEye1.style.border = '1px solid #000';
pupilEye1.style.borderRadius = '50%';
pupilEye1.style.background = '#000';
pupilEye1.style.position = 'absolute';
pupilEye1.style.top = '35px';

eye2.style.width = '100px';
eye2.style.height = '100px';
eye2.style.border = '1px solid #000';
eye2.style.borderRadius = '50%';
eye2.style.position = 'relative';
eye2.style.float = 'right'

pupilEye2.style.width = '30px';
pupilEye2.style.height = '30px';
pupilEye2.style.border = '1px solid #000';
pupilEye2.style.borderRadius = '50%';
pupilEye2.style.background = '#000';
pupilEye2.style.position = 'absolute';
pupilEye2.style.top = '35px';
let resultEye1;
let resultEye2;

window.addEventListener('mousemove', function (event){
    let a = event.y - 55;
    let b = event.x - (window.innerWidth * (50/100) + 50);
    let c = event.y - 55;
    let d = event.x - (window.innerWidth * (50/100) - 50);
    resultEye1 = Math.floor(((Math.atan2(c, d) * 180 / Math.PI) - 180) * -1);
    resultEye2 = Math.floor(((Math.atan2(a, b) * 180 / Math.PI) - 180) * -1);
    eye1.style.transform =`rotate(-${resultEye1}deg)`
    eye2.style.transform =`rotate(-${resultEye2}deg)`
});