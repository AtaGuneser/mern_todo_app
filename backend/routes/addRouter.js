const express = require('express');
const router = express.Router();
const { join } = require('path');
const { sendMessage } = require(join(__dirname, '..', 'help', 'help.js'));
const Text = require(join(__dirname, '..', 'schema', 'text.js'));

router.post('/', (req, res) => {
    try {
        if (!req.body) {
            return sendMessage(res, false, 'No data provided');
        }

        const { text } = req.body;

        if (!text) {
            return sendMessage(res, false, 'No text provided');
        }

        const addText = new Text({ text });

        addText.save().then((e) => {
            return sendMessage(res, true, e);
        }).catch((error) => {
            console.log(error);
            return sendMessage(res, false, 'Error occured');
        });
    }
    catch (error) {
        console.log(error);
        return sendMessage(res, false, 'Error occured');
    }
}
);

module.exports = router;