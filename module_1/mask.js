import MaskInput from 'mask-input';
 
const maskInput = new MaskInput(document.querySelector('.js-input-selector'), {
  mask: '0000-0000-0000-0000',
  alwaysShowMask: true,
  maskChar: '_',
});


class MascedInput{
    constructor(){
        
    }
    maskInput(){
        const input = document.createElement('input');
        document.body.appendChild(input);
    }
}


const masc = new MascedInput()