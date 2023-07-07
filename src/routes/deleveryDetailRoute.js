const express = require("express");
const multer = require("multer");

const router = new express.Router();

const { deliveryDetailCtrl, getDeleveryDetails,
    handleAllDeleveryDetails, updateDeleveryDetails } = require("../controllers/deleverydetails");

const { warehouseDetailCtrl, handleAllWarehouseDetails } = require("../controllers/wherehouseCtrl");


const { productInformationCtrl, handleAllProductInfo, updateProductInfo } = require("../controllers/productInfoCtrl");

const { handleAllOrderDetails, updateOrderDetails } = require("../controllers/orderDetailCtrl")

const { sendImage } = require("../controllers/uploadCsvFile");






const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/')
    },
    filename: function (req, file, cb) {
        console.log(file);
        let newName = Date.now() + '-' + file.originalname
        cb(null, newName);

    }
})
const upload = multer({ storage: storage })


// delevery details 
router.post("/deleverydetails", deliveryDetailCtrl)
router.get("/getalldeleverydetails", handleAllDeleveryDetails)
router.get('/getdeleverydetails/:id', getDeleveryDetails)
router.patch("/updatedeleverydetails", updateDeleveryDetails)



//warehouse Details
router.post('/warehousedetails', warehouseDetailCtrl)
router.get("/handlewarehousedetails", handleAllWarehouseDetails)


//product information 
router.post("/productinformation", productInformationCtrl)
router.get("/getAllProductInfo", handleAllProductInfo)
router.patch("/updateproductdetails/:id", updateProductInfo)




//order details 
router.patch("/orderdetails/:id", updateOrderDetails)
// router.get("/getallorderdetails", handleAllOrderDetails)




//upload csv file
router.post("/uploadcsvfile", upload.single('image') ,sendImage);


module.exports = router