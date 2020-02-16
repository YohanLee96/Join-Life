const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const flash = require('connect-flash');
const session = require('express-session');
const history = require("connect-history-api-fallback");
const logger = require("morgan");
const passport = require('passport');
const passportConfig = require('./passport');


const mainRouter = require("./routes/main/mainController");
const loginRouter = require('./routes/login/loginController');
const app = express();



// Sequelize Sync 
const models = require("./models");
models.sequelize
  .sync()
  .then(() => {
    console.log("✓ DB 연결완료.");
    console.log("  CTRL-C로 서버중지.\n");
  })
  .catch(err => {
    console.error(err);
    console.log("✗ 커넥션 에러.");
    process.exit();
  });


//로그인 관련 passport 모듈 연결.
passportConfig(passport);

console.log('패스포트 셋팅완료..');

//Router 
app.use("/api", mainRouter);
app.use("/api/login",loginRouter);
//Router 끝

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(session({ //라우팅 설정 이후에 꼭 넣어줘야됨.
  resave : false,
  saveUninitialized : false,
  secret : process.env.COOKIE_SECRET, //쿠키를 임의로 변조하는것을 방지하기 위한 값
  cookie : {
      httpOnly : true,
      secure : false, //HTTPS일 경우에만 쿠키를 전송할껀지 처리.
  },
}));
app.use(flash());
app.use(passport.initialize()); //request에 passport 설정 심어주는 부분.
app.use(passport.session());  //세션에 passport 정보 담기.

console.log('패스포트 세션 설정 완료..');


/**
 * vue 연동 모듈
 * 해당 모듈은 꼭 Router 뒤에서 처리하도록 해야 한다.
 * */
app.use(history());

console.log('라우팅 지정완료');

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  // res.render("error");
});

console.log('모두 완료');

module.exports = app;
