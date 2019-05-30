function print (num){
    let result = '\n';

    for (let i = 0; i < num - 1; i += 1) {
        result += ' '.repeat(i);
        result += '*';
        result += ' '.repeat(num * 2 - i * 2 - 3);
        result += '*\n';
    }
    result += ' '.repeat(num - 1);
    result += '*\n';
    console.log(result)
    return result + '\n';
};


module.exports = {
    print
};