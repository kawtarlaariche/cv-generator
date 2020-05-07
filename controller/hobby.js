const models = require('../models');
const Hobby = models.Hobby;

exports.index = (req, res) => {
    Hobby.findAll({include: ['user']}).then(hobbies => res.json(hobbies))
}
exports.findById = (req, res) => {
    Hobby.findByPk(req.params.id).then(hobby => { res.json(hobby) })
}
exports.create = (req, res) => {
    Hobby.create({
        description: req.body.description,
        users_id:req.body.uers_id

    }).then(hobby => {
        console.log(hobby.get)
        res.json(hobby)
    }).catch(err => { console.log(err) });
};
exports.update = (req, res) => {
    Hobby.update({
        description: req.body.description,
        users_id:req.body.uers_id
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
    Hobby.destroy({ where: { id: req.params.id } }).then(hobby => {
        res.json(hobby)
    })
}

