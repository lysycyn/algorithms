// бинарный поиск в отсортированном массиве

(() => {
  const arr = [1, 40, 45, 86, 150, 250, 1000];

  Array.prototype.binarySearch = function(a) {
    let left = 0;
    let right = this.length - 1;

    while (left <= right) {
      let condidate = Math.floor((right - left) / 2) + left;
      if (a === this[condidate]) return condidate;

      if (a < this[condidate]) {
        right = condidate-1;
      }
      else {
        left = condidate+1;
      }
    }

    return false;
  }

  console.log(arr.binarySearch(40));
  console.log(arr.binarySearch(-1));
  console.log(arr.binarySearch(150));
})();
