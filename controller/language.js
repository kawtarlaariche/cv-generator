const models = require('../models');
const Language = models.Language;

exports.index = (req, res) => {
    Language.findAll({include: ['user']}).then(languages => res.json(languages))
}
exports.findById = (req, res) => {
    Language.findByPk(req.params.id).then(language => { res.json(language) })
}
exports.create = (req, res) => {
    language.create({
        name: req.body.name,
        level: req.body.level,
        users_id:req.body.users_id
     
    }).then(language => {
        console.log(language.get)
        res.json(language)
    }).catch(err => { console.log(err) });
};
exports.update = (req, res) => {
    Language.update({
        name: req.body.name,
        level: req.body.level,
        users_id:req.body.users_id
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
    Language.destroy({ where: { id: req.params.id } }).then(language => {
        res.json(language)
    })
}

