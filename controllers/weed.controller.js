const Weed = require('../models/weed.model');

exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

//CREATE les datas
exports.weed_create = (req, res) => {
    const weed = new Weed(
        {
			strain: req.body.strain,
			type: req.body.type,
			rating: req.body.rating,
			effect: req.body.effect,
			flavor: req.body.flavor,
			description: req.body.description
        }
    );

    weed.save(err => {
        if (err) return res.status(500).json({error: err.message})
        res.send('Weed bien ajoutée à la liste')
    })
};

//READ les datas (sur browser)
exports.weed_details = function (req, res) {
    Weed.findById(req.params.id, function (err, weed) {
        if (err) return next(err);
        res.send(weed);
    })
};

//UPDATE les datas (avec put sur postman)
exports.weed_update = function (req, res) {
    Weed.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, weed) {
        if (err) return next(err);
        res.send('Weed modifiée.');
    });
};

//DELETE
exports.weed_delete = function (req, res) {
    Weed.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('La weed a bien été détruite. (consommée)');
    })
};

//---------------------------------------------------------------------------
//Exemple de 'tet' tres interessant
//
//const cb_error = res => error => res.status(500).json({ error })
//
//const xd = x => d => console.log(x, d)
// function xd(x) {
// 	return  function(d) {
// 		consol.log(x, d)
// 	}
// }
//
//Utilisation de ...b permet d'utiliser tout b sans qu'il soit consid2r2 comme un  tableau
// let b = {a: 'lol', x: 'mdr'}
//
// let c = {
// 	v: 'v',
// 	...b
// }
//---------------------------------------------------------------------------
