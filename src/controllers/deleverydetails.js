const details = require("../models/user")


const deliveryDetailCtrl = async (req, res) => {
    try {
        const { firstName, lastName, addressLine1, addressLine2, pincode, city, state, country, email, phoneNo, alternatePhoneNo, } = req.body;

        // Validate the required fields
        if (!firstName || !lastName || !addressLine1 || !pincode || !city || !state || !country || !email || !phoneNo) {
            return res.status(400).json({ error: 'Please fill in all the required fields.' });
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ error: 'Invalid email format.' });
        }

        // Validate phone number format
        const phoneNoRegex = /^\d{10}$/;
        if (!phoneNoRegex.test(phoneNo)) {
            return res.status(400).json({ error: 'Invalid phone number format. Please provide a 10-digit number without spaces or special characters.' });
        }

        // Additional validation for alternate phone number
        if (alternatePhoneNo && !phoneNoRegex.test(alternatePhoneNo)) {
            return res.status(400).json({ error: 'Invalid alternate phone number format. Please provide a 10-digit number without spaces or special characters.' });
        }

        // Create a new user
        const detailSaved = new details({

            firstName,
            lastName,
            addressLine1,
            addressLine2,
            pincode,
            city,
            state,
            country,
            email,
            phoneNo,
            alternatePhoneNo,

        });

        // Save the new user to the database
        await detailSaved.save();



        return res.status(200).json({ message: 'Delivery details saved successfully.' });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            status: false,
            message: "error occur while post delevery details",
            error: error.message
        });
    }
};


async function handleAllDeleveryDetails(req, res) {
    try {
        const alldetails = await details.find({})
        return res.json(alldetails);

    } catch (error) {
        console.log(error);
        res.status(400).json({
            status: false,
            message: "Error occurred while fetching delivery details",
            error: error.message
        });
    }
};


const getDeleveryDetails = async (req, res) => {
    try {
        const _id = req.params.id
        const getDetails = await details.findById(_id)
        res.send(getDetails);
    } catch (error) {
        console.log(error);
        res.status(400).json({
            status: false,
            message: "Error occurred while fetching delivery details",
            error: error.message
        });
    }
};




const updateDeleveryDetails = async (req, res) => {
    try {
        const id = req.body.id;
        const updateDetails = await details.findByIdAndUpdate({ _id: id }, { $set: { firstName: "shaharukh" } }, { new: true });
        res.send(updateDetails)

    } catch (e) {
        console.error(e)
        res.status(500).send("Internal Server Error");
    }
};







module.exports = {
    deliveryDetailCtrl, getDeleveryDetails, handleAllDeleveryDetails, updateDeleveryDetails
}




