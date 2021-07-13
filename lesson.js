// setup : read + convertions + welcome 
const fs = require('fs');

try {
  const data = fs.readFileSync('list.txt', 'utf8').split(" ");
  let result = data.map(i=>Number(i));
  console.log("Bienvenue voici les réponses aux questions selon l'array :")
  console.log(result)
  console.log("")


// bubble sort 
const bubbleSort = (arr) => {
  const len = arr.length;
  let count = 0;
  for (let i = 0; i < len ; i ++) {
    for (let j = 0; j < len ; j++) {
      if (arr[j] > arr[j + 1]) {
        // swap
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        count ++;
      }
    }
  }
  return {
    bubbleComparisonCount: count,
    bubbleArr: arr
  }
}
// result bubbleSort
const { bubbleComparisonCount, bubbleArr} = bubbleSort(result)
console.log(`Tri à bulle: ${bubbleComparisonCount} comparaisons - [${bubbleArr}]`)

// *****************************************//
console.log('******************************************')

// insertion sort
const insertionSort = arr => {
  let count = 0
  
  for(let i = 1; i < arr.length; i++) {
    let curr = arr[i];
    let j = i - 1;
    

    while (j >= 0 && arr[j] > curr) {
      arr[j + 1] = arr[j];
      j--;
      
    }   
    count ++;
    arr[j + 1] = curr;
  }
  return {
    insertionComparisonCount: count,
    insertionArr: arr
  }
}
// result 
  const { insertionComparisonCount, insertionArr} = insertionSort(result)
  console.log(`Tri à insertion: ${insertionComparisonCount} comparaisons - [${insertionArr}]`)

// *****************************************//
console.log('******************************************')

// selection sort
const selectionSort = arr =>  {
  const len = arr.length;
  let count = 0;

  for (let i = 0; i < len; i++) {
    let idxOfMin = i;

    for (let j = i + 1; j < len ; j++) {
      if (arr[j] < arr[idxOfMin]) idxOfMin = j;
      count ++;
    }
    if (idxOfMin !== i) {
      // swap 
      const temp = arr[idxOfMin];
      arr[idxOfMin] = arr[i];
      arr[i] = temp
    }
  }
  return {
    selectionComparisonCount: count,
    selectionArr: arr
  }
}
const { selectionComparisonCount, selectionArr} = selectionSort(result)
console.log(`Tri à sélection: ${selectionComparisonCount} comparaisons - [${selectionArr}]`)

// *****************************************//
console.log('******************************************')

// selection sort
selection = result
let count = 0;
selection.sort(function(a, b) {
  count ++;
  return a - b;
});
console.log(`Tri rapide: ${count} comparaisons -[${selection}]`)


} catch (error) {
  console.error(error.message);
}