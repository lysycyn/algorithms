// обход графа в глубину

(() => {
  console.log('Обход дерева в ширину');
  const myTree = {
    "value": 1,
    "items": [
      {
        "value": 2,
        "items": [
          {"value": 4},
          {"value": 5}
        ]
      },
      {
        "value": 3,
        "items": [
          {"value": 6}
        ]
      }
    ]
  };

  const bfs = function(tree) {
    let queue = [];
    queue.push(tree);
    while(queue.length > 0) {
      let node = queue.shift();
      if (node.value) {
        console.log(node.value);
      }
      if (node.items) {
        node.items.forEach((item) => {
          queue.push(item);
        })
      }
    }
  }

  bfs(myTree);

})();
