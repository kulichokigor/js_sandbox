function waitForScroll() {
    return new Promise((resolve, reject) => {
        window.addEventListener('scroll', resolve)
    });
}

waitForScroll()

function random(){
    let r = Math.round(Math.random() * 255)
    let g = Math.round(Math.random() * 255)
    let b = Math.round(Math.random() * 255)
    const result = 'rgb(' + r + ', ' + g + ', ' + b + ')'
return result
}
random()

function drawOnScroll(){
    waitForScroll().then(()=>{
        const div = document.querySelector('#box');
        div.style.background = `${random()}`
    })
}
drawOnScroll();

function waitForAnswer(){
    return new Promise((resolve, reject) =>{
        window.addEventListener('keydown', (event) =>{
            if(event.keyCode == 89){
                resolve()
            }
            else if(event.keyCode == 78){
                reject()
            }
        })
    })
}


function setText(text){
    let div = document.querySelector('#box')
    div.textContent = text
    document.body.append('div')
}

setText('Вы сделали домашнее задание? Y / N')

waitForAnswer()
    .then(()=> setText('Так держать!'))
    .catch(()=>setText('Нужно подтянуть('))
