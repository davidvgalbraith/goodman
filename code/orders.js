var _ = require('underscore');

// finds the order of every element in the group Zn
function orders(n) {
    var o = {};
    for (var k = 0; k < n; k++) {
        var order = 1;
        while (order * k % n !== 0) {
            order++;
        }
        o[k] = order;
    }
    return o;
}

var x = orders(180);
console.dir(x);
var twos = [];
var threes = [];
var fives = []
_.each(x, function(order, m) {
    if (isPowerOf(order, 2)) {
        twos.push(m);
    }
    if (isPowerOf(order, 3)) {
        threes.push(m);
    }
    if (isPowerOf(order, 5)) {
        fives.push(m);
    }
});

console.log(2, twos);
console.log(3, threes);
console.log(5, fives);

// returns true if m is a power of n
function isPowerOf(m, n) {
    if (m < n) {
        return false;
    }
    if (m === n) {
        return true;
    }
    return isPowerOf(m/n, n);
}

// var horror = [1, 1, 1];
// while (45 * horror[0] + 20 * horror[1] + 36 * horror[2] !== 1) {
//     console.log(horror, 45 * horror[0] + 20 * horror[1] + 36 * horror[2] !== 1)
//     horror[Math.floor(Math.random() * 3)] += (Math.random() < 0.5 ? -1 : 1);
// }
//
// console.log(horror)

for (var k = 0; k < 180; k++) {
    if (k % 4 === 3 && k % 9 === 6 && k % 5 === 4) {
        console.log(k);
    }
}
