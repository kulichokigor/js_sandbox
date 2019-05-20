//*1

function makeImages(){
        let div;
        for(let i = 0; i < arguments.length; i+=1){
            div = document.createElement('div');
            div.innerHTML = '<img src='+ arguments[i] + '>';
            document.body.appendChild(div);
    };
};


//*2
class FormBuilder {
    constructor (form = ''){
        this.elem = document.createElement(form);
        }

    appendTo(target = ''){
        this.targ = document.createElement(target);
        document.body.appendChild(this.targ);
        this.targ.appendChild(this.elem);
        return this
    }
    addInput(name = ''){
        let input = document.createElement('input');
        input.type = 'text';
        input.name = name;
        this.elem.appendChild(input);
        return this
    }
    addCheckbox(name = ''){
        let input = document.createElement('input');
        input.type = 'checkbox';
        input.name = name;
        this.elem.appendChild(input);
        return this
    }
    addButton(name = ''){
        let button = document.createElement('button');
        button.innerHTML = name;
        this.elem.appendChild(button);
        return this
    }
    destroy(){
        this.elem.parentElement.removeChild(this.elem)
    }
}


//*3

function initBall(){
    let div = document.createElement('div');
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.borderRadius = '50%';
    div.style.background = 'aqua';
    div.style.position = 'absolute';
    div.style.top = Math.floor(Math.random() * Math.floor(window.innerHeight)) + 'px';
    div.style.left = Math.floor(Math.random() * Math.floor(window.innerWidth)) + 'px';
    document.body.appendChild(div);
    div.addEventListener('click', function (event) {
        this.style.top = Math.floor(Math.random() * Math.floor(window.innerHeight)) + 'px';
        this.style.left = Math.floor(Math.random() * Math.floor(window.innerWidth)) + 'px';
        event.stopPropagation()
    });
    document.addEventListener('click', function () {
        div.parentElement.removeChild(div)
    })
}