function PriorityQueue() {
    var collection = [];

    this.print = function() {
        console.log(collection);
    }

    this.enqueue = function(element) {
        if (this.isEmpty()) {
            collection.push(element);
        } else {
            var added = false;

            for (var i = 0; i < collection.length; i++) {
                if (element[1] > collection[i][1]) {
                    collection.splice(i, 0, element);
                    added = true;
                    return;
                }
            }

            if (!added) {
                collection.push(element);
            }
        }
    };

    this.dequeue = function() {
        var value = collection.shift();
        return value;
    }

    this.front = function() {
        return collection[0];
    }

    this.size = function() {
        return collection.length;
    }

    this.isEmpty = function() {
        return (collection.length === 0);
    }
}


var pq = new PriorityQueue();

pq.enqueue(['Beau Canes', 2]);
pq.enqueue(['Quincy Larson', 1]);
pq.enqueue(['Raj Kumar', 3]);
pq.enqueue(['Some One', 2]);

pq.print();

console.log(pq.dequeue());

pq.front();

pq.print();