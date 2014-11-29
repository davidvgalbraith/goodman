// playground for working on bullshit algebra problems
var p = require('./permutations');
var _ = require('underscore');

function log(perm) {
    console.log(perm.source);
}

var horror = new p.Permutation('103245');

var all = p.assemblePermutations(horror.source.length);
var count = 0;
_.each(all, function(perm) {
    var s = perm.compose(horror).compose(perm.inverse()).source;
    if (s === '102354') {
        console.log('source', perm.source);
        console.log('inverse', perm.inverse().source)
        console.log('cycles', perm.toCycles());
        console.log();
        count++;
    }
});

console.log(count)

// var a = new p.Permutation('452301');
// var b = new p.Permutation('230145');
//
// log(a.compose(b));
// log(b.compose(a));
