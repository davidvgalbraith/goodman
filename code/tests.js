// playground for working on bullshit algebra problems
var p = require('./permutations');
var Permutation = p.Permutation;
var _ = require('underscore');

var LOG_CYCLES = 2;
var LOG_SORTED = 1;

function log(perm, mess, info) {
    if (_.isArray(perm)) {
        var sources = _.pluck(perm, 'source');
        if (info === LOG_SORTED) {
            sources.sort();
        }
        if (info === LOG_CYCLES) {
            sources = perm.map(function(x) {
                return x.asCycles();
            });
        }
        console.log(sources, mess);
        return;
    }
    console.log(perm.source, mess);
}

var all = _.sortBy(p.assemblePermutations(4), 'source');
//
// var r = new p.Permutation('1230');
// var r2 = r.compose(r);

function getNormalizer(subgroup, fullgroup) {
    var normalizer = [];
    for (var k = 0; k < fullgroup.length; k++) {
        var perm = fullgroup[k];
        var isIn = true;
        for (var l = 0; l < subgroup.length; l++) {
            var subPerm = subgroup[l];
            var c = perm.compose(subPerm).compose(perm.inverse());
            if (!c.isIn(subgroup)) {
                isIn = false;
                break;
            }
        }
        if (isIn) {
            normalizer.push(perm);
        }
    }
    return normalizer;
}
