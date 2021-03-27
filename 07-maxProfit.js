// The share price for a company over a week's trading is
// as follows: [128, 97, 121, 123, 98, 97, 105]. If you
// had to buy shares in the company on a particular day,
// and sell the shares on a subsequent day, write an
// algorithm to work out what the maximum profit you
// could make would be.

const maxProfit = function (arr) {
  let minItem = arr[0];
  let maxDiff = arr[1] - arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] - minItem > maxDiff) {
      maxDiff = arr[i] - minItem;
    }

    if (arr[i] < minItem) {
      minItem = arr[i];
    }
  }
  return maxDiff;
};

const sharePrices = [128, 97, 121, 123, 98, 97, 105];
console.log(maxProfit(sharePrices));
