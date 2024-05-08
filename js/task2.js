const iterator = chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

function chunkArray(arr, num) {
  let from = 0;
  let to = num;
  let done = false;

  return {
    next: function () {
      let result = arr.slice(from, to);
      if (!result.length) {
        done = true;
        result = undefined
      }

      from += num;
      to += from;
      return { value: result, done };
    },
  };
}
