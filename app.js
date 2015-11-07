// button is attaced to pin 17, led to 18
var GPIO = require('onoff').Gpio,
    led = new GPIO(18, 'out'),
    button = new GPIO(17, 'in', 'both');

//var GpioStream = require('gpio-stream'),
//    button = GpioStream.readable(17);
//    led = GpioStream.writable(18),
        http = require('http');

var Firebase = require("firebase");
var colors = require('colors');

var myFirebaseRef = new Firebase("https://bikestand.firebaseio.com/");
var bay1; 

myFirebaseRef.on("value", function(snapshot) {
  console.log(snapshot.val());
});


console.log("Let the Light show begin!");

//var stream = button.pipe(led);
//stream.pipe(process.stdout);

//http.createServer(function (req, res) {
//  res.setHeader('Content-Type', 'text/html');
//  res.write('<pre>logging button presses:\n');
//  stream.pipe(res);
//}).listen(8080);


// define the callback function
function light(err, state) {
  
  // check the state of the button
  // 1 == pressed, 0 == not pressed
  if(state == 1) {
    // turn LED on
    led.writeSync(1);
    myFirebaseRef.child('bay1').set('true');
  } else {
    // turn LED off
    led.writeSync(0);
    myFirebaseRef.child('bay1').set('true');
  }

}
 
// pass the callback function to the
// as the first argument to watch()
button.watch(light);