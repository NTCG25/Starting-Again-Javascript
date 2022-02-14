var promise = new Promise(function(resolve, reject){
    const x = "Games";
    const y = "No Games"
    if (x == y) { 
        resolve(); 
    } else {
        reject();
    }
});

promise.then(function (){
    console.log("Good, you have some games, Congrats!"); 
}).catch(function () {
    console.log("Wow, you don't have any games, Unfortunate");
});

