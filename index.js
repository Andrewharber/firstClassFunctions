const callback = chai => console.log("Spy")
function receivesAFunction (callback) {
   return callback()
}

function fn(a, b){
    return 2 + 4
}
function returnsANamedFunction(){   
    return fn
}

function returnsAnAnonymousFunction(){
    return (function(){
        console.log(":-)")
    });
}
