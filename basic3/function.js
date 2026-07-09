
function sayMyName(){

// console.log("V")
// console.log("I")
// console.log("S")
// console.log("H")
// console.log("A")
// console.log("L")
}

// sayMyName()

// function addTwoNumber(number1,number2){
//     console.log(number1+number2)
// }


// addTwoNumber(3,"4")


function addTwoNumber(number1, number2) {
    // let result = number1 + number2;
    // return result;
}

const result = addTwoNumber(3, 5);
// console.log("Result:", result);

function loginUserMessage(username = "vishal"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))


function calculatedCardPrice(val1,val2,...num1){
    return num1;
}
//console.log(calculatedCardPrice(200,400,497))

const user = {
    username: "vishal",
    price: 234
}

function handleObject(anyObject) {
   // console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

// Call the function
// handleObject(user);

handleObject({
    username:"vishal",
    price:199
})

const arr=[200,300,400,500]
function returnSecondValue(getArray){
      return getArray[1];
}
console.log(returnSecondValue(arr));
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));