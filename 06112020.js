// var x=8;
// k=(x==5)?"It is five":"It is not five";
// console.log(k);

var x = 1280;
var y = 1024;

function decide(width, height){
    let msg;
    msg=(width>height)?"It is landscape":"It is portrait"
    return msg
}



result = decide(x,y);
console.log(result);