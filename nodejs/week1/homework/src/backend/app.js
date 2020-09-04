const express = require("express");
const app = express();

const mealsRouter = require("./routes/meals.js");
const mealRouter = require("./routes/meal.js");
const cheapMealsRouter = require("./routes/cheap-meals.js");
const largeMealsRouter = require("./routes/large-meals.js");
const reservationsRouter = require("./routes/reservations.js");
const reservationRouter = require("./routes/reservation.js");

app.get("/", async(request, response) => {
    response.send("Meal Sharing web application");
});
app.get("/meals", async(request, response) => {
    response.send(mealsRouter);
});

app.get("/meal", (request, response) => {
    response.send(mealRouter);
});

app.get("/cheap-meals", (request, response) => {
    response.send(cheapMealsRouter);
});

app.get("/large-meals", (request, response) => {
    response.send(largeMealsRouter);
});

app.get("/reservations", (request, response) => {
    response.send(reservationsRouter);
});

app.get("/reservation", (request, response) => {
    response.send(reservationRouter);
});

module.exports = app;