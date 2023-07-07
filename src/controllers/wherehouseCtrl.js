const warehouse = require("../models/warehouse");


const warehouseDetailCtrl = async (req, res) => {
    try {
        const newWarehouse = new warehouse({
            warehouseName:req.body.warehouseName,
            pickupAddress: {
                companyName: req.body.pickUpCompanyName,
                contactPersonName: req.body.pickUpContactPersonName,
                addressLine1: req.body.pickUpAddressLine1,
                addressLine2: req.body.pickUpAddressLine2,
                pincode: req.body.pickUpPincode,
                city: req.body.pickUpCity,
                state: req.body.pickUpState,
                country: req.body.pickUpCountry,
                phoneNo: req.body.pickUpPhoneNo,
                email: req.body.pickUpEmail,
                website: req.body.pickUpWebsite,

            },
            returnAddress: {
                companyName: req.body.returnCompanyName,
                contactPersonName: req.body.returnContactPersonName,
                addressLine1: req.body.returnAddressLine1,
                addressLine2: req.body.returnAddressLine2,
                pincode: req.body.returnPincode,
                city: req.body.returnCity,
                state: req.body.returnState,
                country: req.body.returnCountry,
                phoneNo: req.body.returnPhoneNo,
                email: req.body.returnEmail,
                website: req.body.returnWebsite,
            },
            lablePickupAddress: {
                companyName: req.body.lebelPickUpCompanyName,
                contactPersonName: req.body.lebelPickUpContactPersonName,
                addressLine1: req.body.lebelPickUpAddressLine1,
                addressLine2: req.body.lebelPickUpAddressLine2,
                pincode: req.body.lebelPickUpPincode,
                city: req.body.lebelPickUpCity,
                state: req.body.lebelPickUpState,
                country: req.body.lebelPickUpCountry,
                phoneNo: req.body.lebelPickUpPhoneNo,
                email: req.body.lebelPickUpEmail,
                website: req.body.lebelPickUpWebsite,
            },
            lableReturnAddress: {
                companyName: req.body.lableReturnCompanyName,
                contactPersonName: req.body.lableReturnContactPersonName,
                addressLine1: req.body.lableReturnAddressLine1,
                addressLine2: req.body.lableReturnAddressLine2,
                pincode: req.body.lableReturnPincode,
                city: req.body.lableReturnCity,
                state: req.body.lableReturnState,
                country: req.body.lableReturnCountry,
                phoneNo: req.body.lableReturnPhoneNo,
                email: req.body.lableReturnEmail,
                website: req.body.lableReturnWebsite,
            }
        });




        // Save the new warehouse object to the database
        const savedWarehouse = await newWarehouse.save();

        res.status(200).json({
            message: 'Warehouse details saved successfully.',
            warehouse: savedWarehouse
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: false,
            message: "internal error occur",
            error: error.message
        });
    }
};



async function handleAllWarehouseDetails(req, res) {
    try {
        const allWarehousedetails = await warehouse.find({});
        return res.json(allWarehousedetails);
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
    warehouseDetailCtrl, handleAllWarehouseDetails
}