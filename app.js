
//array methods

let cars = [ "gwagon", "rollsroyce", "lambo", "ferrari", "spider" ];
cars.pop()
console.log(cars)
cars.push("benz")
console.log(cars)
cars.shift()
console.log(cars)
cars.unshift("toyota")
console.log(cars)
cars[cars.length]
console.log(cars)

//if and else statement

let nigerian= true

if (nigerian) {

    console.log("Board the plane")
    
}

else{
    console.log("Ticket purchase declined")
}

let height = 5

if (height>6) {
    console.log("play basket ball")

}

else{
    console.log("play cricket")
}


//functions

function commentFood(a) {
    var comment= "i love " +(a)
   return comment;
}


//loop

let foods = ["rice", "beans", "plantain", "soup"]




for (let i = 0; i < foods.length; i++) {
   console.log(foods[i]);
}


while ( foods.length > 0) {
    let food = foods.shift()
    console.log(commentFood(food))
}

//function
function timeRemaining(startTime,endTime){
   return  startTime - endTime
 
}

var left = timeRemaining(40,20);

console.log(left);