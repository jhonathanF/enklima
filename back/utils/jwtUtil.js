const jwt = require('jsonwebtoken');
import UserRepo from '../repositories/userRepo.js';
module.exports = {
    normalUser: function (req, res, next) {
        var token = req.headers['x-access-token'];
        if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

        jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
            if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

            // se tudo estiver ok, salva no request para uso posterior
            req.userId = decoded.id;
            next();
        });
    },

    adminUser: async function (req, res, next) {
        var token = req.headers['x-access-token'];
        if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

        await jwt.verify(token, process.env.JWT_SECRET, async function (err, decoded) {
            if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

            // se tudo estiver ok, salva no request para uso posterior
            req.userId = decoded.id;
            const user = await UserRepo.findById(req.userId);
            if (user[0].isAdmin)
                next();
            else
                return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

        });
    }
}
