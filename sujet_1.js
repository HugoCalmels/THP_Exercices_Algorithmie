const fs = require('fs');
const fileName = process.argv[2];
const data = fs.readFileSync(fileName, 'utf8');
result = JSON.parse(data)
console.log("Voici les réponses aux questions selon la array :")
console.log(result);
console.log("")

// set k
let k = 17;
 
// Exercice 1
let firstTryResult = result.slice();
function printPairs(arr, sum)  {
  let s = new Set();

  for (let i = 0; i < arr.length; ++i) {
    let temp = sum - arr[i];
  
    if (s.has(temp)) {
         console.log("J'ai trouvé une paire avec " + sum + ", : (" + temp + "," + arr[i] + ")");
    }  
      s.add(arr[i]);
  } 
}
//result
printPairs(firstTryResult, k);

// autre methodes
//////
let secondTryResult = result.slice();
function twoSum(arr, n) {
  const sum = [];
   for(let i = 0; i< arr.length; i++) {
     for(let j = i+1;  j < arr.length; j++) {
       if(n == arr[i] + arr[j]) sum.push([arr[i],arr[j]])
     }
   }
  
  return sum
 }
twoSum(secondTryResult, k)
//result
console.log("J'ai trouvé une paire avec " + k + ", : (" + twoSum(secondTryResult, k) + ")" )