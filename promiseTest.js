const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3);
  }, 300);
});

const double = x => x*2;

// Can't do this:
// 
// const resolvedPromise = myPromise; // returns 3
// const doubledPromise = double(resolvedPromise); // doubledPromise = 6
// console.log(doubledPromise); // log 6

// need to chain with .then and .catch
// 
myPromise
  .then(response => console.log(double(response)))
  .catch(err => console.log(err));

const myAsyncFunc = async () => {
  const resolvedPromise = await myPromise; // returns 3
  const doubledPromise = double(resolvedPromise); // doubledPromise = 6
  console.log(doubledPromise); // log 6
}

myAsyncFunc();