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
    if (mess) {
        console.log(perm.source, mess);
    } else {
        console.log(perm.source);
    }
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

function commutator(p1, p2) {
    return p1.compose(p2).compose(p1.inverse()).compose(p2.inverse());
}

var comms = [];
_.each(all, function(p1) {
    var perp1 = [];
    _.each(all, function(p2) {
        // console.log(p1.asCycles(), p2.asCycles(), commutator(p1, p2).asCycles());
        comms.push(commutator(p1, p2));
        perp1.push(commutator(p1, p2).source);
    });
    // console.log(p1.source, _.uniq(perp1).length);
});

comms = _.uniq(comms, 'source');

var comms2 = [];
_.each(comms, function(p1) {
    var perp1 = [];
    _.each(all, function(p2) {
        console.log(p1.asCycles(), p2.asCycles(), commutator(p1, p2).asCycles());
        comms2.push(commutator(p1, p2));
        perp1.push(commutator(p1, p2).source);
    });
    console.log(p1.source, _.uniq(perp1).length);
});

console.log(JSON.stringify(_.uniq(_.pluck(comms2, 'source'))));
