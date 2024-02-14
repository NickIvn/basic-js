function sumAboveZero(matrix) {
    let sum = 0;
  
    for (let col = 0; col < matrix[0].length; col++) {
      let zeroFound = false;
  
      for (let row = 0; row < matrix.length; row++) {
        if (matrix[row][col] === 0) {
          zeroFound = true;
        }
  
        if (!zeroFound) {
          sum += matrix[row][col];
        }
      }
    }
  
    return sum;
  }
  
  // Пример использования:
  const exampleMatrix = [
    [0, 1, 1, 2],
    [0, 5, 0, 0],
    [2, 0, 3, 3]
  ];
  
  const result = sumAboveZero(exampleMatrix);
  console.log(result); // Вывод: 9
  