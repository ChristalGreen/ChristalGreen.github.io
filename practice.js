//Comment out code
//var yourName = prompt("Please enter your name")
//alert(`Hello ${yourName}! Let's go explore the Amazon.`)

//var adjective = prompt("Please enter an adjective.")
//var noun = prompt("Please enter a noun.")
//var liquid = prompt("Please enter a liquid.")
//var bodyPart = prompt("Please enter a body part.")
//var nounTwo = prompt("Please enter another noun.")
//var verb = prompt("Please enter a verb.")
//var place = prompt("Please enter a place.")

//alert(`Once upon a time there were some intrepid explorers who wandered into the amazon. They found some amazing things! Piranhas are more ${adjective} during the day, so make sure you cross the ${noun}  at night. Piranhas are attracted to fresh  ${liquid}`)

//age
//18+ vote
//21+ drink

//var yourAge = prompt("How old are you?")

//if(yourAge>20){
    //alert("You can drink!")
//} else{
    //alert("Sorry, you are not old enough!")
//}
//var yourAge = prompt("How old are you?")
if(yourAge>20){
    alert("You can drink!")
}else if(yourAge>17){
    alert("You can't drink, but you can vote!")
}else {
    alert("You can drink and vote!")
}


var yourName=prompt("Please enter your name.")
prompt(`Hello ${yourName}! Do you know how to write code?`)
var writeCode = prompt(`Hello ${yourName}! Do you know how to write code?`)



if(writeCode==="yes"){
    alert(`You will rule the world.`)
} else{
    alert(`Well, good luck with that.`)
}

//correct code
var yourName=prompt("Please enter your name.")
var writeCode = prompt(`Hello ${yourName}! Do you know how to write code?`)
if(writeCode==="yes"){
    alert(`You will rule the world.`)
} else{
    alert(`Well, good luck with that.`)
}


//Function Process
const myFunction  = () => {
    return
}

//Invoke the function: myFunction()

//---Magic 8 Ball--
const magic8 = () => {

}

 // Generates a random number between 0 and 0.9
Math.random()

//To go from a number between 0 and 3, multiply it by the number you want it to be under. 
Math.random()*3 

Math.random()*11 // will go from 0-10

//Will round down to the neareast whole number
Math.floor()
Math.floor(3.6)
//3

Math.floor(Math.random()*3)
//will give any whole number between 0-2


//const magic8()=>{
//    return Math.floor(Math.random()*3)
//} //DOESN'T WORK

const magic8=()=>{
    var randomNum=Math.floor(Math.random()*3)
    if(randomNum===0){
        return "Better not tell you now"
    } else if(randomNum===1){
        return "It is decidedly so"
    } else if(randomNum===2){
        return "Don't count on it"
    } else {
        return "Ooops, something went wrong"
    }
    
}

// now you must call on the function
magic8()



//Debugging - A way to be able to view something in the console
console.log()

//adding the console log will regenerate the random number being generated 
const magic8=()=>{
    var randomNum=Math.floor(Math.random()*3)
    console.log(randomNum)
    if(randomNum===0){
        return "Better not tell you now"
    } else if(randomNum===1){
        return "It is decidedly so"
    } else if(randomNum===2){
        return "Don't count on it"
    } else {
        return "Ooops, something went wrong"
    }
    
}


var yourName=prompt("Please enter your name.")
var writeCode = prompt(`Hello ${yourName}! Do you know how to write code?`)
if(writeCode==="yes"){
    alert(`You will rule the world.`)
} else{
    alert(`Well, good luck with that.`)
}

const magic8=()=>{
    var randomNum=Math.floor(Math.random()*3)
    console.log(randomNum)
    if(randomNum===0){
        return "Better not tell you now"
    } else if(randomNum===1){
        return "It is decidedly so"
    } else if(randomNum===2){
        return "Don't count on it"
    } else {
        return "Ooops, something went wrong"
    }
    
}
const worldDom =()=>{
    var yourName=prompt("Please enter your name.")
    var writeCode = prompt(`Hello ${yourName}! Do you know how to write code?`)
    if(writeCode==="yes"){
        return "You will rule the world."
    } else(writeCode==="no")
        return "Well, good luck with that."
    }

    const randomNum =()=>{
        var randomNum=Math.floor(Math.random()*)
        }



        const worldDom =()=>{
            var yourName=prompt("Please enter your name.")
            var writeCode = prompt(`Hello ${yourName}! Do you know how to write code?`)
            if(writeCode==="yes"){
                return "You will rule the world."
            } else(writeCode==="no")
                return "Well, good luck with that."
            }




    