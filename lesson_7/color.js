class Color {
    constructor(r,g,b){
        this.r = r
        this.g = g
        this.b = b

    }

    toString(){
     return `rgb(${this.r},${this.g},${this.b})`
    }

    toBlack(){
        this.r = 0
        this.g = 0
        this.b = 0
     return this
    }

    toWhite(){
        this.r = 255
        this.g = 255
        this.b = 255
     return this
    }

    getLightness(){
        return (this.r + this.g + this.b) / 3
    }

    toGrayscale(){
        this.r = Math.round(this.getLightness())
        this.g = Math.round(this.getLightness())
        this.b = Math.round(this.getLightness())
     return this
    }

    invert(){
        this.r = 255 - this.r
        this.g = 255 - this.g
        this.b = 255 - this.b
     return this
    }

    random(){
        this.r = Math.round(Math.random() * 255)
        this.g = Math.round(Math.random() * 255)
        this.b = Math.round(Math.random() * 255)
    return this
    }
};

const color = new Color(1, 8, 3)