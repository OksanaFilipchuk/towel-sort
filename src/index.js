
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let concatArr =[];
  if(matrix == undefined){
    return []
  } else {
    for(let i = 0; i<matrix.length; i++){
      if(i%2 ==1){
        let elemReverse = [];
        for(let j = matrix[i].length-1; j>=0; j--){
          elemReverse.push(matrix[i][j])
        }      
        concatArr = concatArr.concat(elemReverse);
        
        
      }else{      
        concatArr = concatArr.concat(matrix[i]);
      }
    }
    
    return concatArr;
  }  
  
}
