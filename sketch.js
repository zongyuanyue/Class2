// Flapjacks

// take in a number and out put flap if it's divisble 
// by 3, jacks if it's divisible by 5 and flapjacks if both

var flapperJacks = function(aNumber) {
  for(var i = 1; i <= aNumber; i = i + 1) {
    if (i % 3 === 0 && i % 5 === 0){
      console.log("flapjacks")
    }
    else if (i % 3 === 0) {
      console.log("flap")
    }
    else if (i % 5 === 0) {
      console.log("jacks")
    }
    else {
      console.log(i)
    }
  }
}

flapperJacks(1);


