// Trie 
var Node = function() {
    this.keys = new Map();
    this.end = false;

    this.setEnd = function() {
        this.end = true;
    };

    this.isEnd = function() {
        return this.end;
    };
}

var Trie = function() {
    this.root = new Node();

    this.add = function(input, node = this.root) {
        if (input.length == 0) {
            node.setEnd();
            return;
        } else if (!node.keys.has(input[0])) {
            node.keys.set(input[0], new Node());
            return this.add(input.substr(1), node.keys.get(input[0]));
        } else {
            return this.add(input.substr(1), node.keys.get(input[0]));
        };
    };

    this.isWord = function(word) {
        var node = this.root;
        while (word.length > 1) {
            if (!node.keys.has(word[0])) {
                return false;
            } else {
                node = node.keys.get(word[0]);
                word = word.substr(1);
            };
        };
        return (node.keys.has(word) && node.keys.get(word).isEnd()) ? true : false;
    };

    this.print = function() {
        var words = new Array();
        var search = function(node, string) {
            if (node.keys.size != 0) {
                for (let letter of node.keys.keys()) {
                    search(node.keys.get(letter), string.concat(letter));
                };
                if (node.isEnd()) {
                    words.push(string);
                }
            } else {
                string.length > 0 ? words.push(string) : undefined;
                return;
            }
        }
        search(this.root, new String());
        return words.length > 0 ? words : null;
    };
}

var trie = new Trie();
trie.add('ball');
trie.add('bat');
trie.add('doll');
trie.add('dork');
trie.add('do');
trie.add('dorm');
trie.add('send');
trie.add('sense');

console.log(trie.isWord('doll'));
console.log(trie.isWord('dor'));
console.log(trie.isWord('doff'));

console.log(trie.print());
