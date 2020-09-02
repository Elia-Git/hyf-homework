const express = require("express");
const { request, response } = require("express");
const app = express();
const port = 3000;

// Addition
app.get("/numbers/add", (request, response) => {
    let firstNumber = request.query.first;
    let secondNumber = request.query.second;
    let sum = Number(request.query.first) + Number(request.query.second);
    response.send(
        `The sum of : ${request.query.first} and ${request.query.second} is ` + sum
    );
});
// Multiplication
app.get("/numbers/multiply/:first/:second", (request, response) => {
    const multiplication =
        parseInt(request.params.first) * parseInt(request.params.second);
    response.send(
        `The multiplication* of : ${request.params.first} and ${request.params.second} is ` +
        multiplication
    );
});

app.listen(port, () => {
    console.log(`Ready server runing at http://localhost:${port}`);
});