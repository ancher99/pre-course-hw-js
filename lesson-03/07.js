const numbers = [
    [1, 2, 3, 4, 5],
    [11, 20, 33, 40, 55],
    [111, 200, 333, 400, 555],
];
  
for (let i=0; i<numbers.length; i++){
    for(let a = 0; a<numbers[i].length;a++){
        if(numbers[i][a] % 2 ===0){
            continue
        } else{
            numbers[i].splice(a, 1)
        }
    }
}

console.log(numbers)