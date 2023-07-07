const File = require("../models/upoadCsvFile");

const sendImage = async (req, res) => {


    let image = req.file.filename;
    let payload = new File({

        image: image
    })
    let result = await payload.save()
    res.status(200).json({
        status: true,
        result: result
    })
};

module.exports = {
    sendImage
}