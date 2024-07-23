# js-shufflers

A collection of simple JavaScript array shuffling methods.

## Installation

### Using npm
```bash
npm install js-shufflers

const Shufflers = require('js-shufflers');

let arr = [1, 2, 3, 4, 5];

console.log('Fisher-Yates Shuffle:', Shufflers.fisherYatesShuffle([...arr]));
console.log('Random Sort Shuffle:', Shufflers.randomSortShuffle([...arr]));
console.log('Lodash Shuffle:', Shufflers.lodashShuffle([...arr]));
console.log('Custom Shuffle:', Shufflers.customShuffle([...arr]));
console.log('Recursive Shuffle:', Shufflers.recursiveShuffle([...arr]));
console.log('While Loop Shuffle:', Shufflers.whileShuffle([...arr]));

