//let myPromise = new Promise(function getResponseFromAPI(resolve, reject));
//return new Promise();
const getResponseFromAPI = new Promise((resolve, reject) => {
// We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
  // In this example, we use setTimeout(...) to simulate async code.
  // In reality, you will probably be using something like XHR or an HTML API.
  setTimeout(() => {
    resolve("Success!"); // Yay! Everything went well!
  }, 250);
});
