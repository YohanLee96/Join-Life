const express = require('express');
const passport = require('passport');
const {tb_user} = require('../../models');  //모델링
const {isLogin,isNotLogin} = require('../loginMiddleware'); //로그인 미들웨어
const router = express.Router();

/**
 * @Exp 사용자페이지 로그인처리를 위한 Controller
 * https://medium.com/hivelab-dev/vue-express-mysql-part3-3161bbb6c624
 */

 // 로그인 처리.
 router.post('/login',isNotLogin,(req,res,next)=>{
    console.log('aa');
    passport.authenticate('local',(authError,user,info) =>{
        if(authError){  //
            console.error(authError);
            return next(authError);
        }

        console.log(user);
        if(!user){  //로그인이 안됬을 경우..
            res.json({
                message : info.message,
                success : false
            })
        }
        
        return req.login(user,(loginError) =>{
            if(loginError){
                console.error(loginError);
                res.json({
                    success : false
                });
            }
            //로그인 성공 시..
            res.json({
                success : true
            });
        })
    })(req,res,next);
 });

 router.get('/login',(req,res,next) =>{
     console.log('겟로그인!!');
 })
 module.exports = router;