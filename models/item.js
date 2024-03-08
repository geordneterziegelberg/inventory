const mongoose = require("mongoose")

const itemSchema = new mongoose.Schema({
    idlm: {
        type: String
    },
    title: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Item", itemSchema)