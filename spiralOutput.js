// вывод чисел от 1 до n^2 по спирали
(() => {
  const n = 5;
  console.log('Вывод чисел от 1 до n^2 по спирали');

  const spiral = (n) => {
    let isRight = true;
    let i = 0;
    let j = 0;
    let curr = 1;
    let arr = [];
    for (let i = 0; i < n; i++) {
      arr[i] = new Array(n).fill(false);
    }

    while(curr <= n*n) {
      while(j < n && !arr[i][j]) {
        arr[i][j] = curr;
        curr++;
        j++;
        if(j>=n || arr[i][j]) {
          j--;
          i++;
          break;
        }
      }
      while(i < n && !arr[i][j]) {
        arr[i][j] = curr;
        curr++;
        i++;
        if(i>=n || arr[i][j]) {
          i--;
          j--;
          break;
        }
      }
      while(j >= 0 && !arr[i][j]) {
        arr[i][j] = curr;
        curr++;
        j--;
        if(j < 0 || arr[i][j]) {
          j++;
          i--;
          break;
        }
      }
      while(i >= 0 && !arr[i][j]) {
        arr[i][j] = curr;
        curr++;
        i--;
        if (arr[i][j]) {
          i++;
          j++;
          break;
        }
      }
    }
    return arr;
  }
  console.log(spiral(n));

})();
