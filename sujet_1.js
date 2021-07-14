const fs = require('fs');
const fileName = process.argv[2];
const data = fs.readFileSync(fileName, 'utf8');
result = JSON.parse(data)
console.log("Bienvenue voici les réponses aux questions selon l'array :")
console.log(result);
console.log("")

// set k
let k = 17;
 
// Exercice 1
function printPairs(arr, sum)  {
  let s = new Set();

  for (let i = 0; i < arr.length; ++i) {
    let temp = sum - arr[i];
  
    if (s.has(temp)) {
         console.log("J'ai trouvé une paire avec " + sum + ", : (" + arr[i] + ", " + temp + ")");
    }  
      s.add(arr[i]);
  } 
}
//result
printPairs(result, k);

// autre methodes
//////

function twoSum(arr, n) {
  const sum = [];
   for(let i = 0; i< arr.length; i++) {
     for(let j = i+1;  j < arr.length; j++) {
       if(n == arr[i] + arr[j]) sum.push([arr[i],arr[j]])
     }
   }
  
  return sum
 }
twoSum(result, k)
//result
console.log("J'ai trouvé une paire avec " + k + ", : (" + twoSum(result, k) + ")" )