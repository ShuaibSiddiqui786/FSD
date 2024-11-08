/*(function aa() {
    console.log('aa');
})();

function rollnumber(num) {
    console.log("Rollno. is : ", num);
}
setTimeout(rollnumber, 2000, 2200320150059);
setTimeout(rollnumber, 4000, 2200320150014);

function rollnumber(num, delay, nextroll){
    setTimeout(() => {
        console.log("Rollno. is : ", num);
        if(nextroll) nextroll();
    }, delay);
}
rollnumber(2200320150059, 6000, () => {
    rollnumber(2200320150014, 8000, () => {
        rollnumber(2200320150032, 10000, () => {
            rollnumber(2200320150034, 12000);
    })
})
});*/

/*const promise=new Promise(function(resolve,reject) {
    console.log("My first promise")
    reolve("Resolved");
});

promise.then(() => {
    console.log("My first then")
    }).catch(() => {
        console.log("My first Catch")
        })

let promise1 = function getPromise() {
    return new Promise(function(resolve, reject) => {
            resolve("Promise1 is resolved");
    });
}

let promise = new promise((resolve, reject) => {
    resolve({user:"Shuaib", pass:"12345"});
})
promise.then((data) => {
    console.log(data);
    return data();
}).then((res) => {
    console.log(res.user);
}).catch(() => {
    console.log("error");
}).finally(() => {
    console.log("finally")
})*/

// function roll(num,delay){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Roll no is : ",+ num);
//             resolve();
//         }, delay);
//     });
// }


// async function getRoll(){
//     let roll1 = await roll(12131, 1000);
//     let roll2 = await roll(12132, 2000); 
// }
// getRoll();

// roll(12131, 1000).then(() => {
//     roll(12132, 2000).then(() => {
//         roll(12133, 3000).then(() => {
//             console.log("all rolls are done");
//         });
//     });
// })

function orderfood(item, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Ordered food is : " + item + " is ready in : " + time);
            resolve();
        }, 2000);
    });
}
async function getorderfood() {
    let order1 = await orderfood("Biryani", "30 minutes");
    let order2 = await orderfood("Pizza", "20 minutes");
}
getorderfood();