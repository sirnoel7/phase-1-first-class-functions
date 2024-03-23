function receivesAFunction(cb){
         cb();
}

function returnsANamedFunction() {
    function namedF() {
        console.log("This is tedious");
    }

    return namedF;
}

function returnsAnAnonymousFunction(anonymous) {
    return function () {
        console.log("This is tedious");
    };
}