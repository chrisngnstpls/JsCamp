
//x = '7' + '3';
//console.log(typeof(x));

//var x;
//java weirdness
// console.log(x!=='9')


// console.log('3'>1)
// let a = 3;
// let b = new Number(3);
// let c = 3;


// console.log(a==b);
// console.log(a===b);
// console.log(b===c);

// let y = 'this is an \"escape character test"\ yes yes it is'
// console.log(y)


function fruitType(fruit){
    let price;
    let fruitName = fruit.toLowerCase();
    let msg;
    
    switch (fruitName){ 
        case 'bananas':
            price=0.99;
            break;
        case 'oranges':
            price=0.79;
            break;
        case 'apples':
            price  = 0.89;
            break;
        case 'cherries':
            price = 2.99;
            break;
        case 'grapes':
            price = 3.99;
            break;
        default:
            msg='Please enter valid fruit'
            break;
    }
    if (price>0){
        msg='The price of '+fruitName+' is $'+price+'.';
    } else {
        
    }
    return msg;
}
    
showPrice = fruitType('BaNaNaS')
console.log(showPrice)