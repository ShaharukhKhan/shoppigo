const Product = require("../models/productInfo");



const productInformationCtrl = async (req, res) => {
    try {
        const newProduct = new Product({
            orderNumber: req.body.orderNumber,
            paymentType: req.body.paymentType,
            orderDate: req.body.orderDate,
            items: [ {
                itemName: req.body.itemName,
                SKU: req.body.SKU,
                HSN: req.body.HSN,
                value: req.body.value,
                quantity: req.body.quantity,
                tax: req.body.tax,
                discount: req.body.discount,
            } ],
            additionalDetails: {
                invoiceNumber: req.body.invoiceNumber,
                invoiceValue: req.body.invoiceValue,
                ewaybillNumber: req.body.ewaybillNumber,
                shippingCharge: req.body.shippingCharge,
                transactionCharge: req.body.transactionCharge,
                giftwrapCharge: req.body.giftwrapCharge,
                totalDiscount: req.body.totalDiscount,
            },
            currency: req.body.currency,
            orderTotal: req.body.orderTotal,
            collectableValue: req.body.collectableValue,
        })

        // Save the new order object to the database
        const savedProduct = await newProduct.save();

        // Respond with a success message and the saved order
        res.status(200).json({
            message: 'Order saved successfully.',
            result: savedProduct
        });
    } catch (error) {
        // Handle any errors that occur during the process
        console.log(error);
        res.status(400).json({
            status: false,
            message: "erroe occur while post product information",
            error: error.message
        });

    }
};


async function handleAllProductInfo(req, res) {
    try {
        const allProductInfo = await Product.find({});
        return res.json(allProductInfo);
    } catch (error) {

        console.log(error);
        res.status(400).json({
            status: false,
            message: "erroe occur while post product information",
            error: error.message
        });
    }

};




const updateProductInfo = async (req, res) => {
    try {
        const id = req.params.id;
        const updateProductInform = await Product.findByIdAndUpdate({ _id: id }, req.body, { new: true });
        res.send(updateProductInform)

    } catch (e) {
        console.error(e)
        res.status(500).send("Internal Server Error");
    }
};






module.exports = {
    productInformationCtrl, handleAllProductInfo, updateProductInfo, 
}
