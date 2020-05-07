const models = require('../models');
const Education = models.Education;

exports.index = (req, res) => {
    Education.findAll({include: ['user']}).then(educations => res.json(educations))
}
exports.findById = (req, res) => {
    Education.findByPk(req.params.id).then(education => { res.json(education) })
}
exports.create = (req, res) => {
    Education.create({
        dateDebut: req.body.dateDebut,
        dateFin: req.body.dateFin,
        description: req.body.description,
        users_id:req.body.users_id
    }).then(education => {
        console.log(education.get)
        res.json(education)
    }).catch(err => { console.log(err) });
};
exports.update = (req, res) => {
    Education.update({
        dateDebut: req.body.dateDebut,
        dateFin: req.body.dateFin,
        description: req.body.description,
        users_id:req.body.users_id
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
    Education.destroy({ where: { id: req.params.id } }).then(education => {
        res.json(education)
    })
}

