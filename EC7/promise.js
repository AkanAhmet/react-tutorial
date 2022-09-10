
function first() {
    console.log("first");
}

function second() {
    console.log("second");
}

function third() {
    console.log("third");
}

console.log("Running asynchronous :");
first();
setTimeout(second,2000);
third();

// Syncrhonous : ----------------------------------------------------------

function a() {
    return "a";
 }
 
 function b() {
     return "b";
 }
 
 function c() {
    return "c";
 }

async function ahmet() {


 let promise1 = new Promise( (resolve,reject) => {

     resolve(a());

 })

 let promise2 = new Promise( (resolve,reject) => {
    setTimeout( () => {
        resolve(b()) },2000);
   

})

let promise3 = new Promise( (resolve,reject) => {

    resolve(c());

})


   // console.log(await promise1,await promise2, await promise3);  // 1

//    promise1.then( (result1) => {console.log(result1)  // 2

//         promise2.then( (result2) => console.log(result2))

//             promise3.then((result3) =>  console.log(result3) )
//    } );

    // promise1.then((val) => {  // 4
    //     console.log(val);
    //     return promise2})
    //     .then((val2) => {console.log(val2); return promise3; })
    //     .then((val3) => console.log(val3));

   Promise.all([promise1,promise2,promise3]).then((result) => result.map(item => console.log(item)));

}

ahmet();