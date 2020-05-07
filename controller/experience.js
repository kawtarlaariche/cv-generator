const models = require('../models');
const Experience = models.Experience;

exports.index = (req, res) => {
    Experience.findAll({include: ['user']}).then(experiences => res.json(experiences))
}
exports.findById = (req, res) => {
    Experience.findByPk(req.params.id).then(experience => { res.json(experience) })
}
exports.create = (req, res) => {
    Experience.create({
        dateDebut: req.body.dateDebut,
        dateFin: req.body.dateFin,
        description: req.body.description,
        users_id:req.body.users_id
    }).then(experience => {
        console.log(experience.get)
        res.json(experience)
    }).catch(err => { console.log(err) });
};
exports.update = (req, res) => {
    Experience.update({
        dateDebut: req.body.dateDebut,
        dateFin: req.body.dateFin,
        description: req.body.description,
        users_id:req.body.users_id
    },
        {
            returning: true,
            where: { id: req.params.id }
        }
    ).then(experience => {
        res.json(experience)
    });
};
exports.delete = (req, res) => {
    Experience.destroy({ where: { id: req.params.id } }).then(experience => {
        res.json(experience)
    })
}

