class MiniSlider {
    constructor(id = "image-box"){
        this.id = document.getElementById(id)
        this.hideAll();
        this.firstImg = 0;
        this.show(this.firstImg)
        this.createButtons()
        this.next()
    }
    hideAll(){
        for (var i = 0; i < this.id.children.length; i++) {
           this.id.children[i].style.display = 'none'
          }
    }
    show(n){
        this.hideAll();
        this.id.children[n].style.display = 'block';
    }
    createButtons(){
        const conteiner = document.querySelector('.conteiner_box');
        conteiner.style.position = 'relative';
        const buttonPrev = document.createElement("button");
        const buttonNext = document.createElement("button");
        conteiner.appendChild(buttonPrev);
        conteiner.appendChild(buttonNext);
        buttonPrev.className = 'Prev';
        buttonPrev.style.top = "50%"
        buttonPrev.style.left = "0";
        buttonPrev.style.position = "absolute";
        buttonPrev.textContent = 'Prev'

        buttonNext.className = 'Next';
        buttonNext.style.top = "50%"
        buttonNext.style.right = "0";
        buttonNext.style.position = "absolute";
        buttonNext.textContent = 'Next';

        buttonNext.addEventListener('click', this.next.bind(this))
        buttonPrev.addEventListener('click', this.prev.bind(this))
    }

    next(){
        this.hideAll();
        this.firstImg += 1;
        
        if(this.firstImg >= this.id.childElementCount)
        {
            this.firstImg = 0
        }
        this.show(this.firstImg)
    }
    prev(){
        this.hideAll();
        this.firstImg -= 1;
        
        if(this.firstImg < 0)
        {
            this.firstImg = this.id.childElementCount - 1
        }
        this.show(this.firstImg)
    }
}



// const slider = new MiniSlider()