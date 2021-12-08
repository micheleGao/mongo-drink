const express = require('express');
const drinks = require('../models/drinks.js');
const drinkRoutes = express.Router();
const Drinks = require('../models/drinks.js');
const seedData = require('../db/seed');

//seeding --commented out so i dont reseed.
// drinkRoutes.get('/seed', async (req,res) => {
//     try {
//       const newData = Drinks.create(drinkData);
//       console.log(newData)
//     } catch(err) {
//       console.log(err)
//     }
// })

// Index
drinkRoutes.get('/', async (req, res) => {
	try {
		const allDrinks = await Drinks.find();
		res.json(allDrinks);
	} catch (err) {
		console.log(err);
	}
});

// Create
drinkRoutes.post('/', (req, res) => {
	Drinks.create(req.body, (err, recipe) => {
		if (err) {
			res.sendStatus(400);
		} else {
			res.status(201).json(recipe);
		}
	});
});

// Show
drinkRoutes.get('/:id', async (req, res) => {
	try {
		const currentDrinks = await Drinks.findById(req.params.id, (err, recipe) => {
			if (!recipe) {
				res.sendStatus(404);
			} else {
				res.json(recipe);
			}
		});
	} catch (err) {
		console.log(err);
	}
});

// Update
drinkRoutes.put('/:id', async (req, res) => {
	try {
		const updatedDrinksData = await Drinks.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true },
			(err, recipe) => {
				if (err) {
					console.log(err);
				} else if (!recipe) {
					res.sendStatus(404);
				} else {
					res.json(recipe);
				}
			}
		);
	} catch (err) {
		console.log(err);
	}
});

// Delete
drinkRoutes.delete('/:id', async (req, res) => {
	try {
		const deletedDrinks = await Drinks.findByIdAndDelete(
			req.params.id,
			(err, recipe) => {
				if (err) {
					console.log(err);
				} else if (!recipe) {
					res.sendStatus(404);
				} else {
					res.sendStatus(204);
				}
			}
		);
	} catch (err) {
		console.log(err);
	}
});

module.exports = drinkRoutes;