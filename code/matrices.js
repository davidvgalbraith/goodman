// only does 2x2
function Matrix(elements) {
    this.elements = elements;

    this.times = function(other) {
        var a = this.elements;
        var b = other.elements;
        return new Matrix([a[0] * b[0] + a[1] * b[2], a[0] * b[1] + a[1] * b[3],
                       a[2] * b[0] + a[3] * b[2], a[2] * b[1] + a[3] * b[3]]);
    }

    this.reduceMod = function(n) {
        return new Matrix(this.elements.map(function(x) {
            return x % n;
        }));
    }

    this.isEqual = function(other) {
        return isEqual(this.elements, other.elements);
    }
}

function log(matrix) {
    console.log(matrix.elements[0], matrix.elements[1]);
    console.log(matrix.elements[2], matrix.elements[3]);
}

function isEqual(arr1, arr2) {
    for (var k = 0; k < arr1.length; k++) {
        if (arr1[k] !== arr2[k]) {
            return false;
        }
    }
    return true;
}

var id = new Matrix([1, 0, 0, 1]);

var total = 0;

for (var k = 0; k < 3; k++) {
    for (var l = 0; l < 3; l++) {
        for (var m = 0; m < 3; m++) {
            for (var n = 0; n < 3; n++) {
                var a = new Matrix([k, l, m, n]);
                var b = (a.times(a).reduceMod(3));
                if (b.isEqual(id)) {
                    log(a);
                    total++;
                    console.log('titties');
                    console.log('thats all I know\n');
                }
            }
        }
    }
}

console.log(total)

var flip = new Matrix([0, 1, 1, 0]);
for (var k = 0; k < 3; k++) {
    for (var l = 0; l < 3; l++) {
        for (var m = 0; m < 3; m++) {
            for (var n = 0; n < 3; n++) {
                var a = new Matrix([k, l, m, n]);
                var b = (flip.times(a).reduceMod(3));
                if (b.isEqual(id)) {
                    log(a);
                    total++;
                    console.log('titties');
                    console.log('thats all I know\n');
                }
            }
        }
    }
}
