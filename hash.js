// Hash Table 

var hash = function(string, max) {
    var hash = 0;
    for (var i = 0; i < string.length; i++) {
        hash += string.charCodeAt(i);
    }
    console.log(8, hash);
    return hash % max;
}

var HashTable = function() {
    var storage = [];
    const storageLimit = 4;

    this.print = function() {
        console.log(storage);
    }

    this.add = function(key, value) {
        var index = hash(key, storageLimit);
        if (storage[index] === undefined) {
            storage[index] = [ [key, value] ];
        } else {
            var inserted = false;
            for (var i = 0; i < storage[index].length; i++) { 
                if (storage[index][i][0] === key) {
                    storage[index][i][1] = value;
                    inserted = true;
                }
            }

            if (!inserted) {
                storage[index].push([key, value]);
            }
        }
    };

    this.remove = function(key) {
        var index = hash(key, storageLimit);
        if (storage[index].length === 1 && storage[index][0][0] === key) { // looping over the bucket
            delete storage[index];
        } else {
            for (var i = 0; i < storage[index].length; i++) {
                if (storage[index][i][0] === key) {
                    delete storage[index][i];
                }
            }
        }
    };

    this.lookup = function(key) {
        var index = hash(key, storageLimit);

        if (storage[index] === undefined) {
            return undefined;
        } else {
            for (var i = 0; i < storage[index].length; i++) { // looping over the bucket
                if (storage[index][i][0] === key) {
                    return storage[index][i][1];
                }
            }
        }
    };
}


console.log(hash('something', 10));

var ht = new HashTable();
ht.add('raj', 'human');
ht.add('zozo', 'cat');
ht.add('rex', 'dinosaur');
ht.add('tux', 'penguin');

console.log(ht.lookup('tux'));
ht.print();