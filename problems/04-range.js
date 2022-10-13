/***********************************************************************
Write a recursive function, `range`, that takes a start and an end and returns
an array of all numbers in that range, exclusive. If the end number is less than
the start, return an empty array.
Examples:
range(1, 5); // [1, 2, 3, 4]
range(3, 4); // [3]
range(7, 6); // []
***********************************************************************/
/* function range(start, end) {
  if (start > end) return [];
  if (start === end) return [start];
  else if (start === parseInt(end[0])) {
    end = Array.from(end, x => parseInt(x))
    end.pop();
    return end;
  }
  else {
    end = end.toString();
    end = (end[0] - 1) + end;
    return range(start, end);
  }
} */
// the more efficient way...

let range = (start, end, array = []) => {
if (end <= start) return array;
array.push(start);
return range(start + 1, end, array);
}

console.log(range(1, 5)); // [1, 2, 3, 4]
console.log(range(3, 4)); // [3]
console.log(range(7, 6)); // []
console.log(range(1, 5)); // [1, 2, 3, 4]
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = range;
} catch (e) {
  module.exports = null;
}
