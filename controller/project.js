const models = require('../models');
const project = models.project;

exports.index = (req, res) => {
    project.findAll().then(projects => res.json(projects))
}
exports.findById = (req, res) => {
    project.findByPk(req.params.id).then(project => { res.json(project) })
}
exports.create = (req, res) => {
    project.create({
        dateDebut: req.body.dateDebut,
        dateFin: req.body.dateFin,
        description: req.body.description
    }).then(project => {
        console.log(project.get)
        res.json(project)
    }).catch(err => { console.log(err) });
};
exports.update = (req, res) => {
    project.update({
        dateDebut: req.body.dateDebut,
        dateFin: req.body.dateFin,
        description: req.body.description,
    },
        {
            returning: true,
            where: { id: req.params.id }
        }
    ).then(project => {
        res.json(project)
    });
};
exports.delete = (req, res) => {
    project.destroy({ where: { id: req.params.id } }).then(project => {
        res.json(project)
    })
}

