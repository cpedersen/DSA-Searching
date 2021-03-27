import STORE from "../STORE";

const SearchService = {
  linearSearch(input) {
    let result = {
      index: null,
      numberOfSearches: 0,
    };
    for (let i = 0; i < STORE.length; i++) {
      if (STORE[i] === parseInt(input, 10)) {
        result.index = i;
        result.numberOfSearches++;
        return result;
      }
      result.numberOfSearches++;
    }
    result.index = -1;
    return result;
  },
  binarySearch(input) {
    let result = {
      index: null,
      numberOfSearches: 0,
    };
    const sorted = STORE.slice().sort((a, b) => a - b);
    const value = parseInt(input, 10);
    function binarySearch(array, value, start, end) {
      start = start === undefined ? 0 : start;
      end = end === undefined ? array.length : end;
      if (start > end) {
        result.numberOfSearches++;
        return -1;
      }
      const index = Math.floor((start + end) / 2);
      const item = array[index];
      if (item === value) {
        result.numberOfSearches++;
        return index;
      } else if (item < value) {
        result.numberOfSearches++;
        return binarySearch(array, value, index + 1, end);
      } else if (item > value) {
        result.numberOfSearches++;
        return binarySearch(array, value, start, index - 1);
      } else {
        // Number not found
        return -1;
      }
    }
    result.index = binarySearch(sorted, value);
    return result;
  },
};

export default SearchService;
