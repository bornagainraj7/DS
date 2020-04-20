function mySet() {
    var collection = [];
    
    this.has = function(value) {
        return (collection.indexOf(value) !== -1);
    }

    this.values = function() {
        return collection;
    }

    this.add = function(value) {
        if (!this.has(value)) {
            collection.push(value);
            return true;
        }
        return false;
    }

    this.remove = function(value) {
        if (this.has(value)) {
            var index = collection.indexOf(value);
        }
    }

    this.size = function() {
        return collection.length;
    }

    this.union = function(otherSet) {
        var unionSet = new mySet();
        var firstSet = this.values();
        var secondSet = otherSet.values();

        firstSet.forEach(function(e) {
            unionSet.add(e);
        });

        secondSet.forEach(function(e) {
            unionSet.add(e);
        });
        return unionSet;
    }

    this.intersection = function(otherSet) {
        var intersectionSet = new mySet();
        var firstSet = this.values();

        firstSet.forEach(function(e) {
            if (otherSet.has(e)) {
                intersectionSet.add(e);
            }
        });
        
        return intersectionSet;
    }

    this.difference = function(otherSet) {
        var differenceSet = new mySet();
        var firstSet = this.values();

        firstSet.forEach(function(e) {
            if (!otherSet.has(e)) {
                differenceSet.add(e);
            }
        });

        return differenceSet;
    }

    this.subset = function(otherSet) {
        var firstSet = this.values();
        return firstSet.every(function(value) {
            return otherSet.has(value);
        });
    }

}

var setA = new mySet();
var setB = new mySet();

setA.add('a');
setB.add('a');
setB.add('b');
setB.add('c');
setB.add('d');
console.log(setA.values());
console.log(setB.values());
console.log(setA.subset(setB));