const mongoose = require("mongoose")

const uploadFileSchema = new mongoose.Schema({
    image: {
        type: String

    },
});
const File = mongoose.model('file', uploadFileSchema);

module.exports = File;