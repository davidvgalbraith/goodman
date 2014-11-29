// playground for working on bullshit algebra problems
var p = require('./permutations');
var _ = require('underscore');

var horror = new p.Permutation('102354');

var all = p.assemblePermutations(horror.source.length);

_.each(all, function(perm) {
    var s = perm.compose(horror).compose(perm.inverse()).source.join('');
    if (s === '103245') {
        console.log(perm.source);
    }
});
