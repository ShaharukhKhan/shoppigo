
const Product = require("../models/productInfo");


const updateOrderDetails = async (req, res) => {
    try {
        const id = req.params.id
        let payload = {
            selectBox: req.body.selectBox,
            length: req.body.length,
            breadth: req.body.breadth,
            height: req.body.height,
            weight: req.body.weight,
            collectableValue: req.body.collectableValue,
            orderTotal: req.body.orderTotal,

        }
        const updateOrderDetail = await Product.findByIdAndUpdate({ _id: id },payload,
        
            { new: true });

        res.send(updateOrderDetail)

    } catch (e) {
        console.error(e)
        res.status(500).send("Internal Server Error");
    }
};


async function handleAllOrderDetails(req, res) {
    try {
        const allOrderDetails = await Order.find({}).populate("productId")
        return res.json(allOrderDetails);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: false,
            message: "internal error occur",
            error: error.message
        });
    }

};






module.exports = {
    handleAllOrderDetails, updateOrderDetails
};
