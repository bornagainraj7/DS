// STACK using an array
// Palindrome - the word is same from both front and back i.e. bob, racecar.

// let letters = [];
// let word = '';
// let rword = '';

// for (let w of word) {
//     letters.push(w);
// }
// console.log(letters);
// for (let w of word) {
//     rword += letters.pop(w);
// }

// if (word === rword) {
//     console.log(`${word} is a palindrome`);
// } else {
//     console.log(`${word} is not a palindrome`);   
// }


// create a stack 
var Stack = function() {
    this.count = 0;
    this.storage = {};

    this.push = function(value) {
        this.storage[this.count] = value;
        this.count++;
    }

    this.pop = function() {
        if (this.count == 0) {
            return undefined;
        }

        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    this.size = function() {
        return this.count;
    }

    this.peak = function() {
        let count = this.count -1; // -1 because after adding any adding any element we ++ our count with now has nothing, to get the last added element we need to do -1
        if (count < 0) {
            return undefined;
        }
        return  this.storage[count]; 
    }
}


var myStack = new Stack();

myStack.push(5);
myStack.push(10);
console.log(myStack.pop());
console.log(myStack.peak());
myStack.push('Some String');
console.log(myStack.size());
console.log(myStack.peak());
