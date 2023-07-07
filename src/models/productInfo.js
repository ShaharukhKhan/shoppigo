const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    orderNumber: {
        type: String,
        required: [ true, 'Order Number is required.' ]
    },
   
    paymentType: {
        type: String,
        required: [ true, 'Payment Type is required.' ]
    },
    orderDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    items: [ {
        itemName: {
            type: String,
            required: [ true, 'Item Name is required.' ]
        },
        SKU: {
            type: String
        },
        HSN: {
            type: String
        },
        value: {
            type: Number,
            required: [ true, 'Value (Including Tax) is required.' ]
        },
        quantity: {
            type: Number,
            required: true,
            min: [ 1, 'Quantity must be at least 1.' ]
        },
        tax: {
            type: Number,
            default: 0,
            min: [ 0, 'Tax must be a non-negative value.' ]
        },
        discount: {
            type: Number,
            default: 0,
            min: [ 0, 'Discount must be a non-negative value.' ]
        }
    } ],
    additionalDetails: {
        invoiceNumber: {
            type: String
        },
        invoiceValue: {
            type: Number,
            default: 0
        },
        ewaybillNumber: {
            type: String
        },
        shippingCharge: {
            type: Number,
            default: 0
        },
        transactionCharge: {
            type: Number,
            default: 0
        },
        giftwrapCharge: {
            type: Number,
            default: 0
        },
        totalDiscount: {
            type: Number,
            default: 0
        }
    },
    currency: {
        type: String,
        default: 'INR',
        enum: [ 'INR', 'USD', 'EUR' ] // Add more currency options as needed
    },
    orderTotal: {
        type: Number,
        required: true,
        default: 0
    },
    collectableValue: {
        type: Number,
        required: true,
        default: 0
    },
    selectBox: { type: String, default: "None" },
    length: { type: String },
    breadth: { type: String },
    height: { type: String },
    weight: { type: String },
    collectableValue: { type: Number },
    orderTotal: { type: Number }
});

const Product = mongoose.model('product', productSchema);

module.exports = Product;
