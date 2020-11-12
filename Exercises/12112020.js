/* 
12/11/2020
Error handling


*/
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
