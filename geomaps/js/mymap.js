'use strict';

Array.prototype.myMap = function(callback) {
    var arr = [];
    for (var i = 0; i < this.length; i++)
        arr.push(callback(this[i], i, this));
    return arr;
};

// -----------------------------------

function name(n){
    return  'Name:  ' + n;
}

var arrs = ['lewis','dirck', 'perry', 'nathan', 'mattias'];
var numbers2 = [1, 4, 9, 25, 36];

var goodT = arrs.map(name);

var squareRoot = numbers2.map(function(num) {
    //return num;
     return Math.sqrt(num);
});

console.log(goodT); 
console.log(squareRoot); //1, 2, 3, 5, 6
