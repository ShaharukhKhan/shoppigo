const mongoose = require("mongoose");
const warehouse = require("../models/warehouse");



const deleveryDatailSChema = new mongoose.Schema({

    firstName: {
        type: String,
        require: true,
        trim: true
    },
    lastName: {
        type: String,
        require: true,
        trim: true
    },
    addressLine1: {
        type: String,
        require: true,

    },
    addressLine2: {
        type: String,
        require: true,

    },
    pincode: {
        type: Number,
        require: true,

    },
    city: {
        type: String,
        required: true,

    },
    state: {
        type: String,
        require: true,

    },

    country: {
        type: String,
        require: true,

    },

    email: {
        type: String,
        require: true,

        lowercase: true,

    },
    phoneNo: {
        type: Number,
        require: true

    },
    alternatePhoneNo: {
        type: Number

    },

    // wherehouseId:
    //     { type: mongoose.Schema.Types.ObjectId, ref: "warehouse" },



});




const details = new mongoose.model("shoppigo", deleveryDatailSChema)

module.exports = details
