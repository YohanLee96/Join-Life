/**
 * @Exp : 로그인 로직을 위한 미들웨어
 * @see : 로그인한 사용자,로그아웃한 사용자의 라우터 접근 권한을 분기하기 위해 사용.
 */

exports.isLoggedIn = (req,res,next) =>{
    if(req.isAuthenticated()){
        next();
    }else{
        res.json({
            message : '로그인이 필요합니다.'
        });
    }
};

exports.isNotLoggedIn =(req,res,next) =>{
    if(req.isAuthenticated()){
        if(!req.isAuthenticated()){
            next();
        }else{
            res.json({
                message : '잘못된 접근입니다.(Already Login)'
            });
        }
    }
};

