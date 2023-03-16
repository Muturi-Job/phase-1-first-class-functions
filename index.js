function receivesAFunction(callback) {
    callback ();

}

const sky = function (){
    console.log("hello")
}

function returnsANamedFunction(){
    return sky
}
function returnsAnAnonymousFunction(){
    return function (){
        console.log ("hello")
    }
}