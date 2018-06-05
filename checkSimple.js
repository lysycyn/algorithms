(() => {
  function isSimple(num) {
    const a = Math.sqrt(num);
    for (let i = 0; i < a; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  const N = 1000;
  console.log(`Простые числа от 0 до ${N}`);
  for (let i = 0; i < N; i++) {
    if(isSimple(i)) {
      console.log(i);
    }
  }


  // решето Эратосфена
  const a = new Array(N+1).fill(true);
  for(let i = 2; i <= N; i++) {
    if(a[i]) {
      let j = i;
      while(j*i < N) {
        a[i*j] = false;
        j++;
      }
    }
  }

  // for (let i = 2; i < N; i++) {
  //   if (a[i]) {
  //     console.log(i);
  //   }
  // }
})();
