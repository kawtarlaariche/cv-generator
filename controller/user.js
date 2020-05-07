const models = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = models.User;

exports.index = (req, res) => {
    User.findAll()
        .then(users => res.json(users))
}
exports.findById = (req, res) => {
    User.findByPk(req.params.id).then(user => { res.json(user) })
}
exports.create = (req, res) => {
    User.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone,
        birth: req.body.birth,
        placeBirth: req.body.placeBirth,
        nationality: req.body.nationality,
        address: req.body.address,
        image: req.body.image,
        linkedin: req.body.linkedin,
        instagram: req.body.instagram,
        facebook: req.body.facebook,
        website: req.body.website,
        profile: req.body.profile,

    }).then(user => {
        console.log(user.get)
        res.json(user)
    }).catch(err => { console.log(err) });
};
exports.update = (req, res) => {
    User.update({
        street: req.body.street,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone,
        birth: req.body.birth,
        placeBirth: req.body.placeBirth,
        nationality: req.body.nationality,
        address: req.body.address,
        image: req.body.image,
        linkedin: req.body.linkedin,
        instagram: req.body.instagram,
        facebook: req.body.facebook,
        website: req.body.website,
        profile: req.body.profile,

    },
        {
            returning: true,
            where: { id: req.params.id }
        }
    ).then(user => {
        res.json(user)
    });
};

exports.login = (req, res) => {

    User.findAll({
        where: {
            email: req.body.email,
        },
        raw: true
    }).then(
        users => {
            if (users.length > 0) {
                bcrypt.compare(req.body.password, users[0].password).then((_res) => {
                    // res === true

                    let token = jwt.sign({ email: req.body.email }, 'AIMAD', {
                        expiresIn: "24h"
                    })
                    res.json({ token })

                })
            }
            else {
                res.json({ msg: "no email found " })
            }

        },
        err => {
            res.json({ msg: "incorrect data" })
        }
    )
}


exports.register = (req, res) => {
    bcrypt.hash(req.body.password, 10, function (err, hash) {
        User.create({ email: req.body.email, password: hash })
            .then(
                user => {
                    res.json({ msg: "Sucess !" })
                },
                err => {
                    res.status(500).json({ msg: "Server Error Please contact the support !" })
                }
            )
    })
}

exports.delete = (req, res) => {
    User.destroy({ where: { id: req.params.id } }).then(user => {
        res.json(user)
    })
}

