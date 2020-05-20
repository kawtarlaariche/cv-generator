const models = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const moment = require('moment');
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
        title:req.body.title,
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
        password: req.body.password,
        title:req.body.title,
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
        if(user[1]!=0) { 
            res.json({msg:"user updated"});
            console.log(user)
             }
        else { res.json({ msg: 'id not found' }) }
    });
};

exports.getUserByEmail = (req, res) => {

    User.findAll({
        where: {
            email: req.body.email
        },
        raw: true
    }).then(
        users => {
            if (users.length > 0) {
                res.json(users[0])
            }
            else {
                res.status(400).json({ msg: 'email not found' })
            }
        },
        err => { err })

}

exports.login = (req, res) => {

    User.findAll({
        where: {
            email: req.body.email,
        },
        raw: true
    }).then(
        users => {
            if (users.length > 0) {
                bcrypt.compare(req.body.password, users[0].password)
                    .then(
                        compare => {
                            if (compare) {
                                let token = jwt.sign({ email: req.body.email }, process.env.TOKEN_SECRET_KEY, {
                                    expiresIn: process.env.TOKEN_EXPIRY_TIME + "h" || "24h"
                                })
                                console.log(users)
                                let expiryTime = moment().tz(process.env.TZ).add(process.env.TOKEN_EXPIRY_TIME, 'hours');
                                let user1 = {id:users[0].id,firstname:users[0].firstname, lastname:users[0].lastname,email:users[0].email};
                                res.json(200, {token: token,EXPIRY_TIME: expiryTime.format(),user:user1}); //seft lih ghir li m7taja
                            }
                            else res.json(400, { msg: "password incorrect" })

                        },

                    )
            }
            else {
                res.status(403).json({ msg: "email incorrect" })
            }

        },
        err => {
            res.status(500).json({ msg: ' server Problem !! could you plz later try to connect' })
        }
    )
}


exports.register = (req, res) => {
    bcrypt.hash(req.body.password, 10, function (err, hash) {
        User.findAll({
            where: {
                email: req.body.email,
            },
            raw: true
        }).then(
            users => {
                if (users.length > 0) {
                    res.status(400).json({ msg: "email already exist" })
                }
                else {
                    User.create(
                        {
                            firstname: req.body.firstname,
                            lastname: req.body.lastname,
                            email: req.body.email,
                            password: hash
                        })
                        .then(
                            user => {
                                res.status(200).json({ msg: "Sucess !" })
                            },
                            err => {
                                res.status(500).json({ msg: "Server Error Please contact the support !" })
                            }
                        )
                }
            }

        )

    })
}

exports.delete = (req, res) => {
    User.destroy({ where: { id: req.params.id } }).then(user => {
        res.json(user)
    })
}

