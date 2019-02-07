//EXERCISE 1

function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var i = -1;

  return function() {
    i += 1;
    return list[i]
  }
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6


//EXERCISE 2

function countdownGenerator() {
  var x = 4;

  // The following is the closure function
  return function() {
    // This inner function accesses and assigns the value of
    // the variable id, which was defined in the parent function
    x -= 1;
    if ( x > 0) {

    return ` Tminus ${x}...`;
  }
   else if (x === 0 ) {
    return 'Blast Off!';
  }
  else
    return 'Rockets already gone, bub!';
  }
}

// makeIdGenerator returns a function which is assigned to
// the variable nextId
var countdown = countdownGenerator();

console.log(countdown());
console.log(countdown());
console.log(countdown());
console.log(countdown());
console.log(countdown());
console.log(countdown());