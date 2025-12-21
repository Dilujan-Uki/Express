// //Checking the os using node.js programe

// const os=require('os');
// console.log(os.platform())

// // Load the filesystem module
// const fs = require('fs');

// // Read file asynchronously
// fs.readFile('Text.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error('Error reading file: ' + err);
//     return;
//   }
//   console.log('File content: ' + data);
// });

// console.log('Reading file... (this runs first!)');


// //////////////////////////////

// // 1. Callbacks (traditional)
// function fetchData(callback) {
//   setTimeout(() => {
//     callback('Data received!');
//   }, 1000);
// }

// // 2. Promises (ES6+)
// const fetchDataPromise = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve('Promise resolved!'), 1000);
//   });
// };

// // 3. Async/Await (ES8+)
// async function getData() {
//   const result = await fetchDataPromise();
//   console.log(result);
// }

// getData(); // Call the async function

// // Node.js
// global.mylet = 42;
// console.log(global.mylet); // 42


// console.log(`V8 version: ${process.versions.v8}`);