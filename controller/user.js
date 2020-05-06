const models = require('../models');
const user = models.user;

exports.index = (req, res) => {
    user.findAll({ include: ['adress', 'education', 'experience', 'project', 'language', 'hobby'] })
        .then(users => res.json(users))
}
exports.findById = (req, res) => {
    user.findByPk(req.params.id).then(user => { res.json(user) })
}
exports.create = (req, res) => {
    user.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone,
        birth: req.body.birth,
        placeBirth: req.body.placeBirth,
        nationality: req.body.nationality,
        image: req.body.image,
        linkedin: req.body.linkedin,
        instagram: req.body.instagram,
        facebook: req.body.facebook,
        website: req.body.website,
        profile: req.body.profile,
        adresses_id: req.body.adresses_id,
        educations_id: req.body.educations_id,
        experiences_id: req.body.experiences_id,
        projects_id: req.body.projects_id,
        hobbies_id: req.body.hobbies_id,
        languages_id: req.body.languages_id
    }).then(user => {
        console.log(user.get)
        res.json(user)
    }).catch(err => { console.log(err) });
};
exports.update = (req, res) => {
    user.update({
        street: req.body.street,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone,
        birth: req.body.birth,
        placeBirth: req.body.placeBirth,
        nationality: req.body.nationality,
        image: req.body.image,
        linkedin: req.body.linkedin,
        instagram: req.body.instagram,
        facebook: req.body.facebook,
        website: req.body.website,
        profile: req.body.profile,
        adresses_id: req.body.adresses_id,
        educations_id: req.body.educations_id,
        experiences_id: req.body.experiences_id,
        projects_id: req.body.projects_id,
        hobbies_id: req.body.hobbies_id,
        languages_id: req.body.languages_id
    },
        {
            returning: true,
            where: { id: req.params.id }
        }
    ).then(user => {
        res.json(user)
    });
};
exports.delete = (req, res) => {
    user.destroy({ where: { id: req.params.id } }).then(user => {
        res.json(user)
    })
}

