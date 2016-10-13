'use strict';

const numbers = {
    1: () => { return "one"; },
    2: () => { return "two"; },
    3: () => { return "three"; },
    4: () => { return "four"; },
    5: () => { return "five"; },
    6: () => { return "six"; },
    7: () => { return "seven"; },
    8: () => { return "eight"; },
    9: () => { return "nine"; },
    10: () => { return "ten"; },
    11: () => { return "eleven"; },
    12: () => { return "twelve"; },
    13: () => { return "thirteen"; },
    14: () => { return "fourteen"; },
    15: () => { return "fifteen"; },
    16: () => { return "sixteen"; }
};
const translate = number => {
    let n = parseInt(number);
    if (typeof numbers[n] !== 'function') {
        return false;
    }
    return numbers[n](n);
};

module.exports = translate;
