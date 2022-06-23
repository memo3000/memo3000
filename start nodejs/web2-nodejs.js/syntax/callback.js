/*
function a(){
    console.log('A');
}*/
var a = function a(){
    console.log('A');
}

function showfunc(callback){
    callback();
}

showfunc(a);