const wordSearch = (letters, word) => { 
  const horizontalJoin = letters.map(ls => ls.join(''))
  let verticalJoin = newfunc(letters).map(ls => ls.join(""));
  // console.log(horizontalJoin);
  for (l of horizontalJoin) {
      if (l.includes(word)) return true;
  }
  for (l of verticalJoin) {
      if (l.includes(word)) return true;
  }
  return false;
}


const newfunc = (matrix) => {
let numberOfArraysInOutput = matrix[0].length;
let newArr = [];
for (let i = 1; i <= numberOfArraysInOutput; i++) {
newArr.push([]);
}
for (let i = 0; i < newArr.length; i++) {
for (let j = 0; j < matrix.length; j++)  {
  newArr[i].push(matrix[j][i]);
}
}
matrix = newArr;
return matrix;
};

wordSearch([
['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
],"frank");

module.exports = wordSearch