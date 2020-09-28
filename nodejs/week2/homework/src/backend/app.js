const express = require("express");
const app = express();

const mealsRouter = require("./routes/meals.js");
const mealRouter = require("./routes/meal.js");
const cheapMealsRouter = require("./routes/cheap-meals.js");
const largeMealsRouter = require("./routes/large-meals.js");
const reservationsRouter = require("./routes/reservations.js");
const reservationRouter = require("./routes/reservation.js");
const reviewsRouter = require("./routes/reviews.js");

// Part Homework #1
// Default server response
app.get("/", async(request, response) => {
    response.send("<h2>Meal Sharing web application</h2>");
});
//Respond with the json for all the meals
app.use("/meals", mealsRouter);
//random meal(including it's reviews)
app.use("/meal", mealRouter);
//Cheap meals (including it's reviews) ,(price<=50)
app.use("/cheap-meals", cheapMealsRouter);
//Large meals (including it's reviews), (number of guests >=7)
app.use("/large-meals", largeMealsRouter);
//Respond with json all reservations
app.use("/reservations", reservationsRouter);
//Random reservation
app.use("/reservation", reservationRouter);

//Part homework #2

//Reviews(id)
app.use("/reviews", reviewsRouter);

module.exports = app;