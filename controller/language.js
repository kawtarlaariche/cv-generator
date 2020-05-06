const models = require('../models');
const language = models.language;

exports.index = (req, res) => {
    language.findAll().then(languages => res.json(languages))
}
exports.findById = (req, res) => {
    language.findByPk(req.params.id).then(language => { res.json(language) })
}
exports.create = (req, res) => {
    language.create({
        name: req.body.name,
        level: req.body.level,
     
    }).then(language => {
        console.log(language.get)
        res.json(language)
    }).catch(err => { console.log(err) });
};
exports.update = (req, res) => {
    language.update({
        name: req.body.name,
        level: req.body.level,
    },
        {
            returning: true,
            where: { id: req.params.id }
        }
    ).then(language => {
        res.json(language)
    });
};
exports.delete = (req, res) => {
    language.destroy({ where: { id: req.params.id } }).then(language => {
        res.json(language)
    })
}

