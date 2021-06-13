const add = (num1, num2) => {

    if(!num1 || !num2) {

        return console.error('Error: No numbers specified');

    } else if(isNaN(num1) || isNaN(num1) || typeof num1 + num2 == 'string') {
        
        return console.error(`Error: Result of Add(${num1} + ${num2}) is not a number`);

    } else {

    return parseInt(num1) + parseInt(num2);

    }

}

module.exports.add = add;