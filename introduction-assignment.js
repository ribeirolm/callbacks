
function findWaldo(arr, found) {
  console.log('find waldo')
  arr.forEach(function(person, index){
//console.log('foreach: ', person)
    if(person === "Waldo") {
      found(person, index);   // execute callback
    }
  })
}

function actionWhenFound(person,index) {
  console.log(`Found ${person} at ${index}him!`);
}



findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);