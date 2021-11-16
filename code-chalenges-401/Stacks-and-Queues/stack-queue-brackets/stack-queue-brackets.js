'use strict'

const Stack = require('../lib/stack')

function validateBrackets(str) {

    const stack = new Stack();
    const openBrackets = ['(', '[', '{'];
    const closeBrackets = [')', ']', '}'];
    let i = 0;
    // let flag = true;

    if (str.length === 0) {
        return false
    }
    while (i < str.length) {
        if (openBrackets.includes(str[i])) {
            stack.push(str[i]);
        } else if (closeBrackets.includes(str[i])) {
            if (stack.isEmpty()) {
                // flag = false;
                // break;
                return false;
            }
            if (openBrackets.indexOf(stack.pop()) !== closeBrackets.indexOf(str[i])) {
                // flag = false;
                // break;
                return false;
            }
        }
        i++;
    }
    if (!stack.isEmpty()) {
        return false
    }
    return true;
}


module.exports = validateBrackets