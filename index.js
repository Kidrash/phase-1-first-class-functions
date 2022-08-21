 function receivesAFunction(callback){
    return callback()
 }
 const cb = () => "callback"
 receivesAFunction(cb)

 function returnsANamedFunction(){
    return function greet(){
        return 'hi'
    }
 }

 function returnsAnAnonymousFunction(){
    return () => "hi"
 }