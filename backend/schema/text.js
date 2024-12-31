const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const textSchema = new Schema({
    text: {
        type: String,
        required: true,
    },
});

const Text = mongoose.model('Text', textSchema);

module.exports = Text;