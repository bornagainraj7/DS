function Queue() {
    var collection = [];

    this.print = function() {
        console.log(collection);
    }

    this.enqueue = function(value) {
        collection.push(value);
    }

    this.dequeue = function(value) {
        return collection.shift();
    }

    this.front = function(value) {
        return collection[0];
    }

    this.size = function() {
        return collection.length;
    }

    this.isEmpty = function() {
        return (collection.length === 0);
    }
}

var q = new Queue();
q.enqueue('a');
q.enqueue('b');
q.enqueue('c');
q.print();
q.dequeue();
console.log(q.front());
q.print();
