/**
 * SecureController
 *
 * @description :: Server-side logic for managing Secures
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    verySecureMethod: (req, res) => {
        res.json({status:'OK', message: 'You have access!'});
    }	
};

