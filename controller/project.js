const models = require('../models');
const Project = models.Project;

exports.index = (req, res) => {
    Project.findAll({include: ['user']}).then(projects => res.json(projects))
}
exports.findById = (req, res) => {
    Project.findByPk(req.params.id).then(project => { res.json(project) })
}
exports.findProjectsByUserID = (req, res) =>{
    Project.findAll({
        where: {
            users_id: req.body.users_id,
        },
        raw: true
    }).then(
        projects=>{
          /*  if(projects.length>0) { 
                res.json(projects)
            }
            else  res.status(403).json({ msg: "no Project found" })*/
            res.json(projects)
        },
        err=> {res.status(500).json({ msg: ' server Problem !! could plz later try to connect' })}
    )
}
exports.create = (req, res) => {
    Project.create({
        dateDebut: req.body.dateDebut,
        dateFin: req.body.dateFin,
        link:req.body.link,
        description: req.body.description,
        users_id:req.body.users_id
    }).then(project => {
        console.log(project.get)
        res.json(project)
    }).catch(err => { console.log(err) });
};
exports.update = (req, res) => {
    Project.update({
        dateDebut: req.body.dateDebut,
        dateFin: req.body.dateFin,
        link:req.body.link,
        description: req.body.description,
        users_id:req.body.users_id
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
    Project.destroy({ where: { id: req.params.id } }).then(project => {
        res.json(project)
    })
}

