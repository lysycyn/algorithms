(() => {
  console.log('Сортировка слиянием');
  
  Array.prototype.mergeSort = function() {
    const merge = function(arr, left, mid, right) {
      let newArr = new Array(right-left+1);
      let newArrIndex = 0;
      let i = left;
      let j = mid+1;
      let k = 0;

      while (i <= mid && j <= right) {
        if (arr[i] <= arr[j]) {
          newArr[newArrIndex] = arr[i];
          i++;
        } else {
          newArr[newArrIndex] = arr[j];
          j++;
        }
        newArrIndex++;
      }

      while (i <= mid) {
        newArr[newArrIndex] = arr[i];
        newArrIndex++;
        i++;
      }

      while (j <= right) {
        newArr[newArrIndex] = arr[j];
        newArrIndex++;
        j++;
      }

      while(k <= right-left) {
        arr[k+left] = newArr[k];
        k++;
      }

    }

    const sort = function(arr, left, right) {
      if(left >= right) {
        return;
      }
      let mid = Math.floor((right-left)/2 + left);
      sort(arr, left, mid);
      sort(arr, mid+1, right);
      merge(arr, left, mid, right);
    }
    sort(this, 0, this.length-1);
    return this;
  }

  const arr = [4, 1, 34, 86, 1, 23, 0, -5, 9, 10, 11, 7];
  console.log(arr.mergeSort());
})();
