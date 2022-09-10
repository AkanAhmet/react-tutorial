 const add = (a,b) =>  a+b;
 const sub = (a,b) => a-b;
 const hello = (name) => console.log("hello "+name);

 const text = "text";

 const user = { "name" : "ahmet", "age": 25};

 const users =  [{ "name" : "ahmet", "age": 25},{ "name" : "ayse", "age": 23}];

 export default hello; 
export {
    text,
    user,
    users,
    add,
    sub
}