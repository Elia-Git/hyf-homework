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
// Meals Id
router.get("/:id", async(request, response) => {
    const mealsId = request.params.id;
    response.json(meals.filter((meals) => meals.id === parseInt(mealsId)));
});
// meals params
router.get("/:price", async(request, response) => {});

module.exports = router;