function receivesAFunction(callback) {
    console.log('callback function activated');
    callback(); 
}

function returnsANamedFunction() {
    return function namedFunction() {
    }
}

function returnsAnAnonymousFunction() {
    return () => console.log('Hello');
}