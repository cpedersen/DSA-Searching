// Part 1:
// Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18
// and using the recursive binary search algorithm,
// identify the sequence of numbers that each recursive
// call will search to try and find 8 (value).

// Step 1: Split the array in half
// [3, 5, 6, 8, 11, 12, 14, 15, 17, 18]
//      start index = 0
//      end index = 9
//      middle index = 5 (start + end / 2 then round up)
//      middle item = 12

// Step 2: If the middle item is greater than the value (12 > 8; or item > value),
// then search left side first
// [3, 5, 6, 8, 11]
//      start = 0
//      end = 4
//      middle index = 2
//      middle item = 6

// Step 3: If the middle item is less than the value (6 < 8; or item < value),
// then search on the right side first
// [8, 11]
//      start = 3
//      end = 4
//      index = 3
//      middle item = 8 <------- Found it!

// Part 2:
// Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18
// and using the recursive binary search algorithm,
// identify the sequence of numbers that each recursive
// call will search to try and find 16.

// Step 1: Split the array
// [3, 5, 6, 8, 11, 12, 14, 15, 17, 18]
//      start = 0
//      end = 9
//      middle index = 5
//      middle item = 12
// Step 2: 12 < 16, so search on the right side
// [14, 15, 17, 18]
//      start = 6
//      end = 9
//      middle index = 8
//      middle item = 17
// Step 3:
// [14, 15, 17, 18]
//      start = 6
//      end = 9
//      middle index = 7
//      middle item = 15
// Step 4:
// [17, 18]
//      start = 8
//      end = 9
//      middle index = 8
//      middle item = 17
// Step 5:
// [17]
//      start = 8
//      end = 7
//      return -1 <--- didn't find '16'

function binarySearch(array, value, start, end) {
  var start = start === undefined ? 0 : start;
  var end = end === undefined ? array.length : end;

  if (start > end) {
    return -1;
  }

  const index = Math.floor((start + end) / 2);
  const item = array[index];

  console.log(start, end);
  if (item == value) {
    return index;
  } else if (item < value) {
    return binarySearch(array, value, index + 1, end);
  } else if (item > value) {
    return binarySearch(array, value, start, index - 1);
  }
}

let array = [3, 5, 6, 8, 11, 12, 14, 15, 17, 18];
console.log(binarySearch(array, 16, 0, 9));
