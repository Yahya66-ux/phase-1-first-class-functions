function receivesAFunction(func){
    func();
}


function returnsANamedFunction() {

    return function logName() {
     console.log(`Your name is Johnny`);
    }
}

function returnsAnAnonymousFunction() {
    return function (){
        return 'Anonymous function';
    }
}