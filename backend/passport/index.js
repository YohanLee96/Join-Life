const local = require('./local');
const {tb_user} = require('../models');

module.exports = (passport) => {
        passport.serializeUser((tb_user,done) =>{
            done(null,tb_user.userId)
        });

        passport.deserializeUser((userId,done) => {
            tb_user.find({where : {userId}})
                .then(tb_user => done(null,tb_user))
                .catch(err => done(err));
        });

        local(passport);
}