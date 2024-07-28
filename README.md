# js-shufflers

A collection of simple and easy to use JavaScript array shuffling methods.

#### Fisher-Yates Shuffle: 
Efficient and unbiased, providing a perfectly random permutation in O(n) time.

#### Random Sort Shuffle: 
Simple to implement using sort() and Math.random(), but not truly random and less efficient.

#### Lodash's _.shuffle: 
Convenient and reliable, leveraging the widely-used Lodash library for easy shuffling.

#### Custom forEach Shuffle: 
Offers flexibility and control, useful for custom shuffling logic.

#### Recursive Shuffle: 
An educational approach demonstrating recursion, but less efficient and may risk stack overflow on large arrays.

#### While Loop Shuffle: 
Simple and efficient with O(n) complexity, offering clear control over the shuffle process.

## Installation

### Using npm
```bash
npm install js-shufflers
```
### Basic Usage
```
const Shufflers = require('js-shufflers');

let arr = [1, 2, 3, 4, 5];

console.log('Fisher-Yates Shuffle:', Shufflers.fisherYatesShuffle([...arr]));
console.log('Random Sort Shuffle:', Shufflers.randomSortShuffle([...arr]));
console.log('Lodash Shuffle:', Shufflers.lodashShuffle([...arr]));
console.log('Custom Shuffle:', Shufflers.customShuffle([...arr]));
console.log('Recursive Shuffle:', Shufflers.recursiveShuffle([...arr]));
console.log('While Loop Shuffle:', Shufflers.whileShuffle([...arr]));
```

