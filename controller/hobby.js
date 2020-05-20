const models = require('../models');
const Hobby = models.Hobby;

exports.index = (req, res) => {
    Hobby.findAll({include: ['user']}).then(hobbies => res.json(hobbies))
}
exports.findById = (req, res) => {
    Hobby.findByPk(req.params.id).then(hobby => { res.json(hobby) })
}
exports.findHobbiesByUserID = (req, res) =>{
    Hobby.findAll({
        where: {
            users_id: req.body.users_id,
        },
        raw: true
    }).then(
        hobbies=>{
         /*   if(hobbies.length>0) { 
                res.json(hobbies)
            }
            else  res.status(403).json({ msg: "no language found" })*/
            res.json(hobbies)
        },
        err=> {res.status(500).json({ msg: ' server Problem !! could plz later try to connect' })}
    )
}
exports.create = (req, res) => {
    Hobby.create({
        description: req.body.description,
        users_id:req.body.users_id

    }).then(hobby => {
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

