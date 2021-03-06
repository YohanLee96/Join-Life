const local = require('./localStrategy');
const {tb_user} = require('../models');

module.exports = (passport) => {
        passport.serializeUser((tb_user,done) =>{
            done(null,tb_user.userId);
        });

        passport.deserializeUser((userId,done) => {
            tb_user.find({where : {userId}})
                .then(user => done(null,user))
                .catch(err => done(err));
        });

        local(passport);
}