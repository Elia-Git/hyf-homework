/** Create a function that has one parameter: resolveAfter.
Calling this function will return a promise that resolves after
the resolveAfter seconds has passed.*/

//Promise solved after set time
// .then .catch method
const resolvePromiseAfterTime = (resolveAfter) => {
    const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, resolveAfter * 1000);
        })
        .then(() => console.log("I am called asyncronously!! (.then .catch)"))
        .catch((error) => console.error("error"));
};
resolvePromiseAfterTime(7); // Logged out after 7 seconds

// Async try  ctach method
async function promiseAfterSetTime(resolveAfter) {
    // const response = await Promise;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                resolve();
                console.log("I am called asynchronously !! ( try ...catch)");
            } catch (error) {
                console.error(error);
            }
        }, resolveAfter * 1000);
    });
}
promiseAfterSetTime(7); // logged out after 8 seconds