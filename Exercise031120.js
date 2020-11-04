
// declare variables where ht = height in meters, wg is weight in kilos
var ht;
var wg;


function bmi(height, weight){
	var myBmi = weight / (height*height);\
    
    document.write('Your BMI is ' + myBmi + '. ');
    document.write('</br>');
    document.write('You are ' );
    if (myBmi<18.5){
    	document.write('Underweight');
    } else if (18.5<myBmi<24.9){
    	document.write('Normal Weight');
    } else if (25<myBmi<29.9) { 
    	document.write('Overweight');
    } else if (myBmi>30){
    	document.write('Obese');
    } else document.write('something went wrong...');
    
    
}

//run sample function with default numbers (2 meters tall, 50kg)

bmi(2, 50)

