/**
 * UserDetailsController
 *
 * @description :: Server-side logic for managing Userdetails
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    getUserDetails: (req, res) => {
        UserAggregatorService
        .aggregateUserInfo(req.params.name)
        .then(data => {
            res.json(data);
        });
    }
};

