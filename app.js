var Firebase = require("firebase");
var colors = require('colors');

var myFirebaseRef = new Firebase("https://bikestand.firebaseio.com/");
var bay1; 

myFirebaseRef.on("value", function(snapshot) {
    
    console.log(snapshot.val());
    bay1 = snapshot.val().bay1;
});

var bay1New;

while(true){
    if(bay1New !== bay1){
        bay1 = bay1New;
        myFirebaseRef.child('bay1').set(bay1New);
    }
}



//// button is attaced to pin 17, led to 18
//var GPIO = require('onoff').Gpio,
//    led = new GPIO(18, 'out'),
//    button = new GPIO(17, 'in', 'both');
// 
//// define the callback function
//function light(err, state) {
//  
//  // check the state of the button
//  // 1 == pressed, 0 == not pressed
//  if(state == 1) {
//    // turn LED on
//    led.writeSync(1);
//  } else {
//    // turn LED off
//    led.writeSync(0);
//  }
//  
//}
// 
//// pass the callback function to the
//// as the first argument to watch()
//button.watch(light);