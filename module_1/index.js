
function matrixDiff(arr1, arr2){
     var sum = 0;
  if(Array.isArray(arr1) && Array.isArray(arr2)){
    for(let i = 0; i < arr1.length; i++) {
        sum += (arr1[i] - arr2[i]);
}
}
}


import mond from './cat.jpg';


function stickyCat(){
    const cat = document.createElement('div');
    document.body.appendChild(cat);
    cat.innerHTML = `<img src= '${mond}'>`;
    const catImg = document.querySelector('img');
    catImg.style.position = "relative";
    catImg.style.borderRadius = '50%';
    window.addEventListener('mousemove', function(e){
        catImg.style.top = event.y + 'px'
        catImg.style.left = event.x +'px'
    })
}

// stickyCat()

function unstickTheСat(){
    const cillCat = document.querySelector('div');
    cillCat.style.display = 'none'
}
// unstickTheСat()


