const express = require("express");
const router = express.Router();

let meals = require("../data/meals.json");
const reviews = require("../data/reviews.json");
const { response } = require("express");

router.get("/", async(request, response) => {
    response.json(
        (meals = meals.map((meal) => {
            return {
                ...meal,
                reviews: reviews.filter((review) => {
                    return review.id === meal.id;
                }),
            };
        }))
    );
    response.send(meals);
});
// response.send(meals);

module.exports = router;