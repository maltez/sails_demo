const Promise = require('bluebird');

const __getUserInfo = userName => {
        return UserInfo
        .find({fullname: userName});
}

const __getUser = userName => {
        return UserMongo
        .find({fullname: userName})
        .then(res => res);
}

module.exports = {
    aggregateUserInfo: userName => {
        return Promise.props({
            userInfo: __getUserInfo(userName),
            user: __getUser(userName)
        })
        .then( result => {
            let res = null;
            if(result && result.userInfo.length > 0 && result.user.length > 0){
                res = {
                    fullname: result.userInfo[0].fullname,
                    nickname: result.user[0].nickname,
                    age: result.userInfo[0].age,
                    sex: result.userInfo[0].sex,
                    comments: result.userInfo[0].comments,
                    description: result.user[0].description
                };
            }
            return res
        });
    }
}