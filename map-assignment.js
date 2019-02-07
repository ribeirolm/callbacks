var numberArray = [2, 4, 6, 8, 10];

var map = function(array, callback){
  var results = []
  for (var i = 0; i < array.length; i++) {
   //console.log(callback(array[i]));
    results.push( callback(array[i]) )
  };
  return results
}

var multiply = function(number){
  return number * 2;
}

console.log(map(numberArray, multiply));
//expected output = [4, 8, 12, 16, 20]
