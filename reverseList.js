// развернуть односвязный список

(() => {
  console.log('Развернуть односвязный список');
  const list = { value: 1 };
  list.next = { value: 3 };
  list.next.next = { value: 6 };
  list.next.next.next = { value: 7 };
  list.next.next.next.next = { value: 10 };

  const printList = (list) => {
    let head = list;
    while(head) {
      console.log(head.value);
      head = head.next;
    }
  };
  printList(list);

  function reverseList(list) {
    var curr = list;
    var prev = null;
    while(curr) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    return prev;
  }

  console.log('развернуть список и вывести');
  printList(reverseList(list));
})();
