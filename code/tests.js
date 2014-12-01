// playground for working on bullshit algebra problems
var p = require('./permutations');
var _ = require('underscore');

function log(perm) {
    console.log(perm.source);
}

// var horror = new p.Permutation('413205');
//
// var all = p.assemblePermutations(horror.source.length);
// var count = 0;
// horrors = [];
// _.each(all, function(perm) {
//     var s = perm.compose(horror).compose(perm.inverse()).source;
//     if (s === '102354') {
//         horrors.push(perm.source);
//         console.log('source ', perm.source);
//         console.log('inverse', perm.inverse().source)
//         console.log('cycles', perm.toCycles());
//         console.log();
//         count++;
//     }
// });
//
// console.log(horrors.sort(), horrors.length)
var all = p.assemblePermutations(3);
_.each(all, function(perm) {
    for (var k = 0; k < all.length; k++) {
        if (perm.compose(all[k]).source !== all[k].compose(perm).source) {
            return;
        }
    }
    console.log(perm.source)
});
// var a = new p.Permutation('452301');
// var b = new p.Permutation('230145');
//
// log(a.compose(b));
// log(b.compose(a));
