
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let newMatrix = []
  if(!matrix){
    return [];
  }
  for(let i = 0; i < matrix.length; i++){
      for(let j = 0; j < matrix[i].length; j++){
          let column = i % 2 === 0 ? j : (matrix[i].length - j - 1);
          newMatrix.push(matrix[i][column]);
      };
  };
  return newMatrix
}
