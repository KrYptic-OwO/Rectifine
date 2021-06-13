const add = (num1, num2) => {

    if(isNaN(num1) || isNaN(num1) || typeof num1 + num2 == 'string') return console.error(`Error: Result of Add(${num1} + ${num2}) is not a number`);

    return parseInt(num1) + parseInt(num2);

}

console.log(parseInt(3) + parseInt('3'));

module.exports.add = add;