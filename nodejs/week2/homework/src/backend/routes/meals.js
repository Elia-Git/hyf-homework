const express = require("express");
const router = express.Router();

let meals = require("../data/meals.json");
const reviews = require("../data/reviews.json");
const { response } = require("express");

// router.get("/", async(request, response) => {
//     response.json(
//         (meals = meals.map((meal) => {
//             return {
//                 ...meal,
//                 reviews: reviews.filter((review) => {
//                     return review.id === meal.id;
//                 }),
//             };
//         }))
//     );
//     response.send(meals);
// });

// Part Week#2
// Meals Id
router.get("/:id", async(request, response) => {
    const mealsId = request.params.id;
    response.json(meals.filter((meals) => meals.id === parseInt(mealsId)));
});
// meals parameters
router.get('/', async(request, response) => {
    // Get meals that has a price smaller than maxPrice
    if (request.query.maxPrice) {
        response.send(meals.filter((meal) => meal.price < Number(request.query.maxPrice)));
    }

    // Get meals that partially match a title.Rød grød med
    if (request.query.title) {
        response.send(
            meals.filter((meal) => meal.title.includes(String(request.query.title)))
        );
    }
    // Get meals that has been created after the date
    if (request.query.createdAfter) {
        response.send(meals.filter((meal) => meal.createdAt > request.query.createdAfter));
    }
    // 	Only specific number of meals	Number
    if (request.query.limit) {
        let limitValue = Number(request.query.limit)
        let specificMeals = [];
        for (let i = 0; i < limitValue; i++) {
            specificMeals.push(meals[i]);
        }
        response.send(specificMeals);
    }
});



module.exports = router;