// callbacks, Promises , async await

// Flow

function myFun() {
  console.log("MyFun ran");
}

function myFun2() {
  console.log("MyFun2 called");
}

function myAsyncFun() {
  setTimeout(() => {
    return [1, 2, 3, 4, 5];
  }, 0);
}

function myAsyncFun2() {
  setTimeout(() => {
    console.log("myAsynFun2 ran");
  }, 0);
}

// myAsyncFun();
// myAsyncFun2();
// myFun();
// myFun2();

//  CALLBACK HELL
// setTimeout(() => {
//   console.log("async code executed");
//   myFun2();
//   setTimeout(() => {
//   }, 0);
// }, 0);

function myAsyncFunUsingPromise(limit) {
  return new Promise((resolve, reject) => {
    if (limit > 10000) reject("Limit too large!");
    let sum = 0;
    for (let i = 0; i < limit; i++) {
      sum += i;
    }
    resolve(sum);
  });
}

// this bound
const printError = () => {
  console.log("Something went wrong! please try after some time");
};

// function printError() {
//   console.log("Something went wrong! please try after some time");
// }
// this keyword depends on the object where it is being called from

// myAsyncFunUsingPromise(1000000)
//   .then(function(data) {
//     console.log(data);
//     myFun2();
//   })
//   .catch(function(err) {
//     // console.log(err);
//     printError();
//   });

// var getBlogPosts = new Promise(function(resolve, reject) {
//   setTimeout(function() {
//     resolve([
//       { id: 1, title: "My first Blog", desc: "My first blog desc" },
//       { id: 2, title: "My second Blog", desc: "My second blog desc" },
//       { id: 3, title: "My third Blog", desc: "My third blog desc" }
//     ]);
//   }, 3000);
// });

// getBlogPosts.then(function(blogs) {
//   console.log(blogs);
// });

//   console.log(getBlogPosts);

async function logData() {
  const data = await myAsyncFunUsingPromise(100);
  console.log(data);
  myFun2();
}

logData();

function fetchDBdata() {
  return new Promise(function(resolve, reject) {
    // time consuming logic
    resolve(data);

    // something goes wrong
    reject("something went wrong!");
  });
}

// paypal -> Node jS from JAVA spring based service
//  1. they used 75% resources
//  2. 2x request with less hardware -> request is an async event -> event loop -> ready to listen for the other request
// 3. 40% less line of code

// server threads ->
// JS in single threaded
