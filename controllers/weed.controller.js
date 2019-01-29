const Weed = require('../models/weed.model');

exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

// controllers/products.js
exports.weed_create = function (req, res) {
    let weed = new Weed(
        {
			strain: req.body.strain,
			type: req.body.type,
			rating: req.body.rating,
			effect: req.body.effect,
			flavor: req.body.flavor,
			description: req.body.description
        }
    );

    weed.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Weed bien ajoutée à la liste')
    })
};