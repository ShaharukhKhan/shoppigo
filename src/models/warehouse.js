const mongoose = require("mongoose");

const warehouseSchema = new mongoose.Schema({
    warehouseName: { type: String, Require: true },
    pickupAddress: {
        companyName: { type: String, require: true },
        contactPersonName: { type: String, require: true },
        addressLine1: { type: String, require: true },
        addressLine2: { type: String, require: true },
        pincode: { type: Number, require: true },
        city: { type: String, require: true },
        state: { type: String, require: true },
        country: { type: String, require: true },
        phoneNo: { type: Number, require: true },
        email: { type: String, require: true },
        website: { type: String, require: true },
    },
    returnAddress: {
        companyName: { type: String, require: true },
        contactPersonName: { type: String, require: true },
        addressLine1: { type: String, require: true },
        addressLine2: { type: String, require: true },
        pincode: { type: Number, require: true },
        city: { type: String, require: true },
        state: { type: String, require: true },
        country: { type: String, require: true },
        phoneNo: { type: Number, require: true },
        email: { type: String, require: true },
        website: { type: String, require: true },

    },
    lablePickupAddress: {
        companyName: { type: String, require: true },
        contactPersonName: { type: String, require: true },
        addressLine1: { type: String, require: true },
        addressLine2: { type: String, require: true },
        pincode: { type: Number, require: true },
        city: { type: String, require: true },
        state: { type: String, require: true },
        country: { type: String, require: true },
        phoneNo: { type: Number, require: true },
        email: { type: String, require: true },
        website: { type: String, require: true },
    },
    lableReturnAddress: {
        companyName: { type: String, require: true },
        contactPersonName: { type: String, require: true },
        addressLine1: { type: String, require: true },
        addressLine2: { type: String, require: true },
        pincode: { type: Number, require: true },
        city: { type: String, require: true },
        state: { type: String, require: true },
        country: { type: String, require: true },
        phoneNo: { type: Number, require: true },
        email: { type: String, require: true },
        website: { type: String, require: true },
    },
});




const warehouse = new mongoose.model("warehouse", warehouseSchema)

module.exports = warehouse