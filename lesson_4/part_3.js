//*3-mask
function mask (stringValue = ''){
    let str = '';
    let last = '';
    if (stringValue.length >= 6 && stringValue.length <= 10){
        for(let i = 0; i <= stringValue.length-5; i++){
            str += '*';
        };
        last = stringValue.slice(length-4);
        mask.toEqual = str + last;
        return mask
    }else{return stringValue}
}


//*5
function func5 (arr){
    const arrey = new Array();
    if(arr instanceof Array === true){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            arrey.push(arr[i][j]);
                for(let k = 0; k < arr[i][j].length; k++){
                    arrey.push(arr[i][j][k]);
                };
        };
            arrey.push(arr[i]);
        };
        let newArr = arrey.filter(function(number) {
            if(number instanceof Array === false){
                return number
            }
          });
          return newArr
        }
    };

    //*6_add
    const add = (a) => {
        let sum = a;
        const func = (b) => {
            sum += b;
            return func;
        };
        func.toString = () => {
            return sum
        }
        return func;
    };


    //*4 
    function func4(){}


    //*6
