const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1]
    try {
        var decoded = jwt.verify(token, 'AIMAD');
        next()
    } catch (err) {
        return res.status(401).json({
            message: 'Auth failed !'
        })
    }

}