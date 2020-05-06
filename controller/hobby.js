const models = require('../models');
const hobby = models.hobby;

exports.index = (req, res) => {
    hobby.findAll().then(hobbies => res.json(hobbies))
}
exports.findById = (req, res) => {
    hobby.findByPk(req.params.id).then(hobby => { res.json(hobby) })
}
exports.create = (req, res) => {
    hobby.create({
        description: req.body.description,

    }).then(hobby => {
        console.log(hobby.get)
        res.json(hobby)
    }).catch(err => { console.log(err) });
};
exports.update = (req, res) => {
    hobby.update({
        description: req.body.description,
    },
        {
            returning: true,
            where: { id: req.params.id }
        }
    ).then(hobby => {
        res.json(hobby)
    });
};
exports.delete = (req, res) => {
    hobby.destroy({ where: { id: req.params.id } }).then(hobby => {
        res.json(hobby)
    })
}

