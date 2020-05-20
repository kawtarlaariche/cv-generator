const models = require('../models');
const Education = models.Education;

exports.index = (req, res) => {
    Education.findAll({include: ['user']}).then(educations => res.json(educations))
}
exports.findById = (req, res) => {
    Education.findByPk(req.params.id).then(education => { res.json(education) })
}
exports.findEducationsByUserID = (req, res) =>{
    Education.findAll({
        where: {
            users_id: req.body.users_id,
        },
        raw: true
    }).then(
        educations=>{
 
          /*  if(educations.length>0) { 
                res.json(educations)
            }
            else  res.status(403).json({ msg: "no Education found" })*/

           res.json(educations)
        },
        err=> {res.status(500).json({ msg: ' server Problem !! could plz later try to connect' })}
    )
}
exports.findEducsByUserID = (req, res) =>{
    Education.findAll({
        where: {
            users_id: req.params.users_id,
        },
        raw: true
    }).then(
        educations=>{
            if(educations.length>0) { 
                res.json(educations)
            }
            else  res.status(403).json({ msg: "no Education found" })
        },
        err=> {res.status(500).json({ msg: ' server Problem !! could plz later try to connect' }),
               console.log(err)}
    )
}
exports.create = (req, res) => {
    Education.create({
        dateDebut: req.body.dateDebut,
        dateFin: req.body.dateFin,
        university:req.body.university,
        description: req.body.description,
        users_id:req.body.users_id
    }).then(education => {
        console.log(education)
        res.json(education)
    }).catch(err => { console.log(err) });
};
exports.update = (req, res) => {
    Education.update({
        dateDebut: req.body.dateDebut,
        dateFin: req.body.dateFin,
        university:req.body.university,
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

