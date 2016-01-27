// Flapjacks

// take in a number and out put flap if it's divisble 
// by 3, jacks if it's divisible by 5 and flapjacks if both

var flapperJacks = function(aNumber) {
  var holdsEverything;
  
  for(var i = 1; i <= aNumber; i = i + 1) {
    var result = "";
    
    if (i % 3 === 0) {
      result = result + "flap"
    }
    if (i % 5 === 0) {
      result = result + "jacks"
    }
    else {
      result = i;
    }
    holdsEverything += result
  }
  console.log(holdsEverything);
}

console.log(holdsEverything)

flapperJacks(173);
// swear it's random.

