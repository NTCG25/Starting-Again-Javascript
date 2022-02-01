
// Before
function dum(a,b) {
    return a + b 
}

// After
let dum2 = (a,b) => a + b 


// Before
function isNegative(negativeNumber) {
    return number <= 0 
} 

// After
let isNegative = negativeNumber => number <= 0 


// Before
function randomNumber() { 
    return Math.random
}


// After
let randomNumber = () => Math.random


// Before
document.addEventListener("click", function() { 
    console.log("click")
})


// After
document.addEventListener("click", () => console.log("Click"))
