
//var slugify = require("slugify");  // BEFORE ES-6
import slugify from 'slugify';  // with "type":"module"

import hello, {users,user,add,sub} from './my-module.js';

console.log(slugify('hello ahmet akan','-'));

console.log(add(2,3));

hello("mehmet");

console.log(`Result is ${add(2,3)}`)

console.log(`Sub result with 6 and 4 :\t${sub(6,4)}`);

console.log('user:\t', user)

console.log('users', users);

setTimeout(()=> console.log("ahmet"),3000);

