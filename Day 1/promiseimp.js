//  url = "https://api.github.com/users";

const fetch = require('node-fetch');

// Your fetch logic
fetch('https://api.github.com/users')
const url = "https://api.github.com/users";
let b = fetch(url);
b.then((data) => {
    console.log(data);
    return data.json();
});
// }).then((data) => {
//     console.log(data);
// }).catch(() => {
//     console.log(error);
// }).finally(() => {
//     console.log("first");
// });