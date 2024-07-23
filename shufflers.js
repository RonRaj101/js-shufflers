// shufflers.js
const Shufflers = {
    // Fisher-Yates Shuffle (Knuth Shuffle)
    fisherYatesShuffle: function(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    },
  
    // Using sort() with Math.random()
    randomSortShuffle: function(array) {
      return array.sort(() => Math.random() - 0.5);
    },
  
    // Using Lodash's _.shuffle method
    lodashShuffle: function(array) {
      const _ = require('lodash');
      return _.shuffle(array);
    },
  
    // Using a custom forEach method
    customShuffle: function(array) {
      array.forEach((_, i) => {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      });
      return array;
    },
  
    // Using a recursive approach
    recursiveShuffle: function(array, n = array.length) {
      if (n <= 1) return array;
      const i = Math.floor(Math.random() * n);
      [array[i], array[n - 1]] = [array[n - 1], array[i]];
      return this.recursiveShuffle(array, n - 1);
    },
  
    // Using a simple while loop
    whileShuffle: function(array) {
      let m = array.length, t, i;
  
      while (m) {
        i = Math.floor(Math.random() * m--);
        t = array[m];
        array[m] = array[i];
        array[i] = t;
      }
  
      return array;
    }
  };
  
  module.exports = Shufflers;
  