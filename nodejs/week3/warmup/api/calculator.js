const express = require("express");
const router = express.Router();
const { request, response } = require("express");

router.get("/", (request, response) => {
    response.send("Four mathematical operations calculator");
});

// const port = process.env.PORT || 3000;

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

//A. Getting data through query parameters using GET

router.get("/calculator/add", async(request, response) => {
    const adding =
        Number(request.query.firstParam) +
        Number(request.query.secondParam) +
        Number(request.query.thirdParam);
    response.send(`Result is ${adding}`);
});

router.get("/calculator/subtract", async(request, response) => {
    let subtracting =
        Number(request.query.firstParam) -
        Number(request.query.secondParam) -
        Number(request.query.thirdParam);
    response.send(`Result is ${subtracting}`);
});

router.get("/calculator/multiply", async(request, response) => {
    const multiplying =
        Number(request.query.firstParam) *
        Number(request.query.secondParam) *
        Number(request.query.thirdParam);
    response.send(`Result is ${multiplying}`);
});

router.get("/calculator/divide", async(request, response) => {
    let dividing =
        Number(request.query.firstParam) /
        Number(request.query.secondParam) /
        Number(request.query.thirdParam);
    response.send(`Result is ${dividing}`);
});

//B. Getting data through query parameters using POST

router.post("/calculator/add", async(request, response) => {
    addition({
            firstParam: Number(request.query.firstParam),
            secondParam: Number(request.query.secondParam),
            thirdParam: Number(request.query.thirdParam),
        })
        .then((result) => response.json(result))
        .catch((error) => {
            response.status(400).send("Bad request").end();
            throw error;
        });
});
const addition = async({ firstParam, secondParam, thirdParam }) => {
    return await (firstParam + secondParam + thirdParam);
};

const subtration = async({ firstParam, secondParam, thirdParam }) => {
    return await (firstParam - secondParam - thirdParam);
};

router.post("/calculator/subtract", async(request, response) => {
    subtration({
            firstParam: Number(request.query.firstParam),
            secondParam: Number(request.query.secondParam),
            thirdParam: Number(request.query.thirdParam),
        })
        .then((result) => response.json(result))
        .catch((error) => {
            response.status(400).send("Bad request").end();
            throw error;
        });
});

const multiplication = async({ firstParam, secondParam, thirdParam }) => {
    return await (firstParam * secondParam * thirdParam);
};

router.post("/calculator/multiply", async(request, response) => {
    multiplication({
            firstParam: Number(request.query.firstParam),
            secondParam: Number(request.query.secondParam),
            thirdParam: Number(request.query.thirdParam),
        })
        .then((result) => response.json(result))
        .catch((error) => {
            response.status(400).send("Bad request").end();
            throw error;
        });
});

//
const division = async({ firstParam, secondParam }) => {
    return await (firstParam / secondParam);
};

router.post("/calculator/divide", async(request, response) => {
    division({
            firstParam: Number(request.query.firstParam),
            secondParam: Number(request.query.secondParam),
        })
        .then((result) => response.json(result))
        .catch((error) => {
            response.status(400).send("Bad request").end();
            throw error;
        });
});
module.exports = router;

// app.listen(port, () => console.log(`Server ready on port ${port}!`));