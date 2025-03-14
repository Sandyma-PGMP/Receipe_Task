const mongoose = require('mongoose');

const RecipesSchema = new mongoose.Schema({
    name: { type: String, required: true },
    ingredients: [String],
    instructions: { type: String, required: true },
    prepTime: Number,
    cookTime: Number,
    servings: Number,
    createdAt: { type: Date, default: Date.now }
});

module.exports = RecipesSchema;