const express = require("express");
const router = express.Router();

const meals = require("../data/meals.json");
const reviews = require("../data/reviews.json");

router.get("/", async(request, response) => {
    response.json(
        meals
        .map((meal) => {
            return {
                ...meal,
                reviews: reviews.filter((review) => {
                    return review.mealId === meal.id;
                }),
            };
        })
        .filter((meal) => meal.price <= 50)
    );
});

module.exports = router;