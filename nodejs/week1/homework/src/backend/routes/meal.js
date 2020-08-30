const express = require("express");
const router = express.Router();

const meals = require("../data/meals.json");
const reviews = require("../data/reviews.json");

router.get("/meal", (request, response) => {
    const randomMeal = Math.floor(Math.random() * meals.length + 0);

    meals.forEach((meal) => {
        meals.filter((review) => review.id === meal.id);
    });
    response.send(randomMeal);
});

module.exports = router;