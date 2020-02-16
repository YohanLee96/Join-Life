const local = require('passport-local').Strategy;
const bcrypt = require('bcrypt-nodejs');

const {tb_user} = require('../models');

/**
 * 일반 로그인에 대한 Passport 로직
 */

module.exports=(passport) => {
   passport.use(new local({
    usernameField : 'userId',
    passwordField : 'userPassword'
   }, async(userId,userPassword,done) =>{
        try{
            const exUser = await tb_user.findOne({where:{ userId} });
            if(exUser){
                // request에서 받은 패스워드 암호화하여 매칭되는지 확인. 
                //const result = await bcrypt.compareSync(userPassword,exUser.userPassword);

                const result = false;
                if(exUser.userPassword == userPassword){
                    result = true;
                }

                if(result){
                    done(null,exUser);
                }else{
                    done(null,false,{message : '비밀번호가 일치하지 않습니다.'});
                }
            }else{
                done(null,false,{message : '가입된 아이디가 없습니다.'});
            }
        }catch(error){
            console.error(error);
            done(error);
        }
   }))
};