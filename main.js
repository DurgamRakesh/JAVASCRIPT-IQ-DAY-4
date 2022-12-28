function f1(){
    var a = 10;
    function f2(){
        var b = 20;
        console.log(a+b);
    }
    return f2()
}
f1()

console.log('pass')

// <-------------------------------------------------->

var a = null;
console.log(a);

// <-------------------------------------------------->

//this is example of promises
let p = new Promise((res,rej) => {
    let a = true;
    if(a){
        res('hello this is resolve state')
    }
    else{
        rej('hello this is reject state')
    }
});

p.then((x) => {
    console.log(x);
})
.catch((y) => {
    console.log(y);
})

// <-------------------------------------------------->

//this is example of promise chaing
let promisechaing = new Promise((res,rej) => {
    setTimeout(()=>{
       res(10);
    },1000);

});

promisechaing.then((a)=>{
    console.log(a);
    return a*2
})
.then((b)=>{
    console.log(b);
    return b*3
})
.then((c)=>{
    console.log(c);
    return c*4
})
.then((d)=>{
    console.log(d);
    return d*5
})
.then((e)=>{
    console.log(e);
})

// <-------------------------------------------------->

//this is example of pure functions
function add(a,b){
    return a*b
}
console.log(add(5,6));

//this is exaple of impure functions
var x = 10;
function sum(a,b){
    x = 10;
 return a+b+x
}
console.log(sum(5,6));