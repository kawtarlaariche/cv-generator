const models = require('../models');
const Language = models.Language;

exports.index = (req, res) => {
    Language.findAll({include: ['user']}).then(languages => res.json(languages))
}
exports.findById = (req, res) => {
    Language.findByPk(req.params.id).then(language => { res.json(language) })
}
exports.findLanguagesByUserID = (req, res) =>{
    Language.findAll({
        where: {
            users_id: req.body.users_id,
        },
        raw: true
    }).then(
        languages=>{
     /*       if(languages.length>0) { 
                res.json(languages)
            }
            else  res.status(403).json({ msg: "no language found" })*/
            res.json(languages)
        },
        err=> {res.status(500).json({ msg: ' server Problem !! could plz later try to connect' })}
    )
}
exports.create = (req, res) => {
    Language.create({
        name: req.body.name,
        level: req.body.level,
        users_id:req.body.users_id
     
    }).then(language => {
        res.json(language)
    }).catch(err => { console.log(err) });
};
exports.update = (req, res) => {
    Language.update({
        name: req.body.name,
        level: req.body.level,
        users_id:req.body.users_id
    },
        {
            returning: true,
            where: { id: req.params.id }
        }
    ).then(language => {
        res.json(language)
    });
};
exports.delete = (req, res) => {
    Language.destroy({ where: { id: req.params.id } }).then(language => {
        res.json(language)
    })
}

