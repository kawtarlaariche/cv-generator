const models = require('../models');
const adress = models.adress;

exports.index = (req,res)=>{
adress.findAll().then(adresses=>res.json(adresses))
}
exports.findById = (req,res) =>{
    adress.findByPk(req.params.id).then(address=>{res.json(address)})
}
exports.create =(req,res) =>{
    adress.create({
       street:req.body.street,
       numStreet:req.body.numStreet,
       postaleCode:req.body.postaleCode,
       city:req.body.city,
       country:req.body.country
    }).then(address=>{
        console.log(address.get)
        res.json(address)
    }).catch(err=>{console.log(err)});
};
exports.update = (req,res)=>{
    adress.update({
        street:req.body.street,
        numStreet:req.body.numStreet,
        postaleCode:req.body.postaleCode,
        city:req.body.city,
        country:req.body.country},
        {
            returning: true,
            where: { id: req.params.id }
        }
    ).then(address=>{
        res.json(address)
    });
};
exports.delete = (req,res)=>{
    adress.destroy({where:{id:req.params.id}}).then(address=>{
        res.json(address)
    })
}

