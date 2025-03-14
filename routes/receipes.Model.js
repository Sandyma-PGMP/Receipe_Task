const mongoose = require('mongoose');
const ReceipesSchema = require('./receipes.schema');

// Create Model and export
module.exports = mongoose.model("Receipes", ReceipesSchema);