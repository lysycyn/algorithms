// обход графа в глубину

(() => {
  console.log('Обход дерева в глубину');
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

  const dfs = function(tree) {
    const visitNode = function(node) {
      console.log(node.value);
      if(node.items) {
        node.items.map((item) => visitNode(item));
      }
    }
    visitNode(tree);
  }

  dfs(myTree);

})();
