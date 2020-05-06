const models = require('../models');
const experience = models.experience;

exports.index = (req, res) => {
    experience.findAll().then(experiences => res.json(experiences))
}
exports.findById = (req, res) => {
    experience.findByPk(req.params.id).then(experience => { res.json(experience) })
}
exports.create = (req, res) => {
    experience.create({
        dateDebut: req.body.dateDebut,
        dateFin: req.body.dateFin,
        description: req.body.description
    }).then(experience => {
        console.log(experience.get)
        res.json(experience)
    }).catch(err => { console.log(err) });
};
exports.update = (req, res) => {
    experience.update({
        dateDebut: req.body.dateDebut,
        dateFin: req.body.dateFin,
        description: req.body.description,
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
    experience.destroy({ where: { id: req.params.id } }).then(experience => {
        res.json(experience)
    })
}

