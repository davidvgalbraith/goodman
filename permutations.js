var _ = require('underscore');

function Permutation(source) {
    this.source = source.split('');
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
    this.inverse = function() {
        var result = [];
        for (var k = 0; k <= this.source.length; k++) {
            for (var l = 0; l < this.source.length; l++) {
                if (this.source[l] === k) {
                    result.push(l);
                }
            }
        }
        return new Permutation(result.join(''));
    }
}

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

var horror = new Permutation('102354');

var all = assemblePermutations(6);

_.each(all, function(perm) {
    var s = perm.compose(horror).compose(perm.inverse()).source.join('');
//    console.log(s);
    if (s === '103245') {
        console.log(perm.source);
    }
});

//console.log(new Permutation(
