const app = require("./app");
const port = 3000;
const hostname = "localhost";

app.listen(port, () => {
    console.log(
        `Hello Elias: -Here is the homework server runing!! http://${hostname}:${port}/`
    );
});