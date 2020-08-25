const split = (str, delim) => {
  // write code for strings.split

  return str.split("-")

}

const pairs = (str) => {
  // write code for strings.pairs
  let pairArr = str.split('');

  let pairArr2 = []
  let counter = 0;
  for (let i = 0; i < (str.length); i++) {

    if (i % 2 == 0) {
      pairArr2[counter] = pairArr[i] + pairArr[i + 1]
      counter++;
    }
  }
  return pairArr2;
}

const reverse = (str) => {
  // write code for strings.reverse

  let splitString = str.split('');
  let reverseArray = splitString.reverse();
  let joinArray = reverseArray.join('');
  return joinArray;

}

module.exports = {
  split,
  pairs,
  reverse
}