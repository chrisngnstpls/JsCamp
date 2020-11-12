/* 
12/11/2020
Error handling


*/
/*
    function arrayFromRange (min,max){
        let myArray=[];
        console.log('starting');
        for (i=min;i<max;i++){
            toPush = i+1;
            myArray.push(toPush);
        }
        return myArray
    }

    x = arrayFromRange(5,15);
    console.log(x);

*/
// second method of solving

    function anotherAttempt (min, max){
        let myArray=[];
        let i=min;
        console.log('starting');
        
        while (i<max){
            i++
            pushValue = i+1;
            myArray.push(pushValue);

        }
        return myArray;
    }

    f = anotherAttempt(5,10);
    console.log(f);