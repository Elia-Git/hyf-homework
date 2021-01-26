const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const calculatorRouter = require("./api/calculator");

app.use(express.urlencoded({ extended: true }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use("/api", calculatorRouter);

app.listen(port, () => console.log(`Server listening on port ${port}!`));