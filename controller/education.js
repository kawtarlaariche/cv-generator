const models = require('../models');
const education = models.education;

exports.index = (req, res) => {
    education.findAll().then(educations => res.json(educations))
}
exports.findById = (req, res) => {
    education.findByPk(req.params.id).then(education => { res.json(education) })
}
exports.create = (req, res) => {
    education.create({
        dateDebut: req.body.dateDebut,
        dateFin: req.body.dateFin,
        description: req.body.description
    }).then(education => {
        console.log(education.get)
        res.json(education)
    }).catch(err => { console.log(err) });
};
exports.update = (req, res) => {
    education.update({
        dateDebut: req.body.dateDebut,
        dateFin: req.body.dateFin,
        description: req.body.description,
    },
        {
            returning: true,
            where: { id: req.params.id }
        }
    ).then(education => {
        res.json(education)
    });
};
exports.delete = (req, res) => {
    education.destroy({ where: { id: req.params.id } }).then(education => {
        res.json(education)
    })
}

