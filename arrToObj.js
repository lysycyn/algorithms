// Перевести массив в объект вида пар ключ-значение

const arr = [
  {name: "test", value: 5},
  {name: "test2", value: 6},
  {name: "test3", value: 7},
  {name: "test4", value: 8},
];


function arrToObj(arr) {
  return arr.reduce((prev, {name, value}) => ({...prev, [name]: value}), {});
}

console.log(arrToObj(arr));
