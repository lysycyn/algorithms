// сортировка пузырьком

(() => {
  Array.prototype.bubbleSort = function() {
    for(var i = 0; i < this.length; i++) {
      for (var j = 1; j < this.length; j++) {
        if (this[j-1] > this[j]) {
          var buf = this[j];
          this[j] = this[j-1];
          this[j-1] = buf;
        }
      }
    }
    return this;
  }

  console.log('Сортировка пузырьком');
  const a = [4, 5, 1, 3, 5, 9, 2, 2, 1, 1, 10];
  console.log(a);
  console.log(a.bubbleSort());
  const b = [1, 0, -2, -3, 5, 4, 2, 8, 10, 1, 7];
  console.log(b);
  console.log(b.bubbleSort());
})();
