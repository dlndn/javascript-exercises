const removeFromArray = function(array) {
    for (let i=1; i<arguments.length; i++) {
        removeElement(array, arguments[i]);
    }
    return array;
};

const removeElement = function(array, element) {
    const index = array.indexOf(element);
    if (index > -1) { 
        array.splice(index, 1);
    }
}

// Do not edit below this line
module.exports = removeFromArray;
