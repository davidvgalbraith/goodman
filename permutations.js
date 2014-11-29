var _ = require('underscore');

// give it a string e.g. "543210"
// and it'll be the permutation that sends 0 to 5, 1 to 4, etc.
//
function Permutation(source) {
    this.source = source.split('');
    // compute the product of this and another permutation, this on the left
    // returns another permutation
    this.compose = function(perm) {
        var ps = perm.source;
        if (ps.length !== this.source.length) {
            throw new Error('cannot compose permutations of different lengths: ' +  this.source.length + ' ' + ps.length);
        }
        var result = [];
        for (var k = 0; k < ps.length; k++) {
            result.push(ps[this.source[k]]);
        }
        return new Permutation(result.join(''));
    }
    // compute the inverse of this permutation
    // this permutation times its inverse should always be the identity
    this.inverse = function() {
        var result = [];
        for (var k = 0; k < this.source.length; k++) {
            for (var l = 0; l < this.source.length; l++) {
                if (this.source[l] === k + '') {
                    result.push(l);
                }
            }
        }
        if (result.length !== this.source.length) {
            throw new Error('you fucked up inverse');
        }
        return new Permutation(result.join(''));
    }
}

// make every possible permutation on count objects
function assemblePermutations(count) {
    var result = [];
    var base = _.range(count);
    var made = {};
    var total = fact(count);
    while (result.length < total) {
        while (made[base.join('')]) {
            base = _.shuffle(base);
        }
        made[base.join('')] = true;
        result.push(new Permutation(base.slice(0).join('')));
    }
    return result;
}

function fact(n) {
    if (n <= 0) {
        return 1;
    }
    return n * fact(n - 1);
}

module.exports = {
    assemblePermutations: assemblePermutations,
    Permutation: Permutation
}
