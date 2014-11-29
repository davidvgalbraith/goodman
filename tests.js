// playground for working on bullshit algebra problems
var p = require('./permutations');
var _ = require('underscore');

function log(perm) {
    console.log(perm.source);
}

var horror = new p.Permutation('1023');

var all = p.assemblePermutations(horror.source.length);

_.each(all, function(perm) {
    var s = perm.compose(horror).compose(perm.inverse()).source.join('');
    if (s === '0132') {
        console.log(perm.source);
        console.log(perm.toCycles());
    }
});

// var a = new p.Permutation('452301');
// var b = new p.Permutation('230145');
//
// log(a.compose(b));
// log(b.compose(a));
