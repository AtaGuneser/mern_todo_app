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

        const { id } = req.body;

        if (!id) {
            return sendMessage(res, false, 'No data provided');
        }
        if (id.length !== 24) {
            return sendMessage(res, false, 'Invalid id');
        }

        Text.findByIdAndDelete(id).then((e) => {
            return sendMessage(res, true, e);
        }).catch(() => {
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