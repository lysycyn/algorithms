// сортировка выбором

(() => {
  console.log('Сортировка выбором');
  Array.prototype.choiseSort = function() {
    for (var i = 0; i < this.length; i++) {
      var min = this[i]
      var index = i;
      for (var j=i+1; j < this.length; j++) {
        if (this[j] <= min) {
          min = this[j];
          index = j;
        }
      }
      if (index != i) {
        var buf = this[index];
        this[index] = this[i];
        this[i] = buf;
      }
    }
    return this;
  }

  const a = [3, 5, 1, 3, 24, 9, 7, 2, -3, 1, 10];
  console.log(a);
  console.log(a.choiseSort());

  const b = [4, 5, -10, 3, 5, 23, 2, 2, 11, 1, 10];
  console.log(b);
  console.log(b.choiseSort());

})();
