let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    username= "vishal"
    function two(){
        const website="youtube.com"
        console.log(username)
    }
   // console.log(website)
    two()
}

// one()

if(true){
    username="vishal"
    if(username==="vishal"){
        const website="instagram"
        console.log(username+website)
        
    }
}


//+++++intesrting
console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}