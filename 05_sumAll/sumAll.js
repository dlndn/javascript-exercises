const sumAll = function(int1, int2) {
    let sum = 0;
    let start = 0;
    let end = 0;

    if (int1 < 0 || int2 < 0) {
        return "ERROR";
    }

    if (typeof(int1) != "number" || typeof(int2) != "number") {
        return "ERROR";
    }
    
    if (int1 > int2) {
        start = int2;
        end = int1
    } else {
        start = int1;
        end = int2;
    }

    for (let i=start; i<=end; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
