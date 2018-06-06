// сортировка вставками

(() => {
  console.log('Сортировка вставками');
  Array.prototype.insertSort = function() {
    if (this.length === 1) return this;

    for (var i = 1; i < this.length; i++) {
      let candidate = this[i];
      let index = i;
      for (var j = i; i > 0 && this[j-1] > candidate; j--) {
        this[j] = this[j-1];
        index = j-1;
      }
      this[index] = candidate;
    }
    return this;
  }

  const a = [1, -12, 2, 8, 4, 3, 5, -3, 1, 10];
  console.log(a);
  console.log(a.insertSort());

  const b = [4, 5, -10, 3, 5, 23, 2, 2, 11, 1, 10];
  console.log(b);
  console.log(b.insertSort());

})();
