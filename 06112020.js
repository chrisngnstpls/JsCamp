// var x=8;
// k=(x==5)?"It is five":"It is not five";
// console.log(k);

// var x = 1280;
// var y = 1280;

// function decide(width, height){
//     let msg;
    
//     if (width==height){
//             msg="It is a square";
//     } else {
//         msg=(width>height)?"It is landscape":"It is portrait";
//     }
//     return msg;
// }



// result = decide(x,y);
// console.log(result);


/*
***This does not run***
***returns : SyntaxError: Unexpected token '?' 


let a = null;
let b = undefined;
let c = 'something';

x = (a??b??c);
console.log(x);

*/

// const arr = [1,2,3,4,5,6,7]

// while (arr.length>0) {
//     const elem = arr.shift();
//     console.log(elem);
// }

function exerciseDo(numberOfTimes){
    let i = 0;

    do{
        i++
        console.log(i)
    } while (i<numberOfTimes)
}

exerciseDo(7)