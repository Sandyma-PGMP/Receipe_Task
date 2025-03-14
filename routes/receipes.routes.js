const client = require("../databaseConfig/mongooseConnectionConfig");
const ReceipesModel = require("./receipes.Model");
const mongoose = require("mongoose")
const {ObjectId} = mongoose.Types



async function getReceipes(request, response) {
    try {
        const results = await ReceipesModel.find()

        if (results.length < 1) {
            return response
                .status(200)
                .json({message: "No Receipes found", data: []})
        } else {
            return response
                .status(200)
                .json({message: "Receipes fetched successfully", data: results})
        }
    } catch (error) {
        console.log("Error occurred", error)
    }
}

async function getReceipeById(request, response) {
    const {ReceipeId} = request.params; // gets url params *required
    if (!ReceipeId) {
        return response
            .status(400)
            .json({message: "Receipe Id is missing in request"})
    } else {
        const result = await ReceipesModel.findOne({_id: new ObjectId(ReceipeId)});
        if (result) {
            return response
                .status(200)
                .json({message: "Receipe fetched successfully", data: result})
        } else {
            return response
                .status(200)
                .json({message: "Receipe not found", data: {}})
        }
    }
}

async function createReceipe(request, response) {
    try {
        const Receipe = new ReceipesModel(request.body);
        const acknowledgement = await Receipe.save();
        if (acknowledgement) {
            return response
                .status(201)
                .json({message: "Receipe created successfully"})
        } else {
            return response
                .status(206)
                .json({message: "Receipe could not be created"})
        }
    } catch (error) {
        return response
            .status(500)
            .json({message: "Something went wrong", error: error})
    }
}

async function updateReceipe(request, response) {
    try {
        const {ReceipeId} = request.params;
        if (!ReceipeId) {
            return response
                .status(400)
                .json({message: "Bad request"})
        } else {
            const acknowledgement = await ReceipesModel.findByIdAndUpdate(
                ReceipeId, request.body, { new: true })
            if (acknowledgement) {
                return response
                    .status(201)
                    .json({message: "Receipe updated successfully!", data: acknowledgement})
            } else {
                return response
                    .status(200)
                    .json({message: "Receipe cannot be updated!", data: acknowledgement})
            }
        }
    } catch(error) {
        return response
            .status(500)
            .json({message: "Something went wrong", error: error})
    }
}

async function deleteReceipe(request, response) {
    try {
        const {ReceipeId} = request.params;
        if (!ReceipeId) {
            return response
                .status(400)
                .json({message: "Necessary input is missing in request"})
        } else {
            const  acknowledgement = await ReceipesModel.findByIdAndDelete({ _id: new ObjectId(ReceipeId) });
            if(acknowledgement) {
                return response
                    .status(200)
                    .json({message: "Receipe deleted successfully"})
            } else {
                return response
                    .status(200)
                    .json({message: "Receipe is either deleted already or not available"})
            }
        }
    } catch(error) {
        return response
            .status(500)
            .json({message: "Something went wrong", error: error})
    }
}

module.exports = {
    getReceipes,
    getReceipeById,
    createReceipe,
    updateReceipe,
    deleteReceipe
};