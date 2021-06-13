const add = (num1, num2) => {

    if(isNaN(num1) || isNaN(num1)) return console.error(`Error: Result of Add(${num1} + ${num2}) is not a number`);

    return num1 + num2;

}

module.exports.add = add;