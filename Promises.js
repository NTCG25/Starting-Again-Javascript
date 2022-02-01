let h = new Promise((resolve, reject) => {
    let a = 5 + 5
    if( a === 10) { 
    resolve("Correct")
    } else{
        reject("Incorrect")
    }
})

h.then((message) => { 
    console.log("This is in the then: " + message)
}).catch((message) => {
    console.log("This is in the catch: " + message )
})