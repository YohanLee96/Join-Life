var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var history = require("connect-history-api-fallback");
var logger = require("morgan");

var mainRouter = require("./routes/main/mainController");

var app = express();

// Sequelize Sync 
const models = require("./models");
models.sequelize
<<<<<<< HEAD
  .sync()
=======
  .sync() 
>>>>>>> 1613b3670fa17959b751dcdb5d690a2245a2d736
  .then(() => {
    console.log("✓ DB 연결완료.");
    console.log("  CTRL-C로 서버중지.\n");
  })
  .catch(err => {
    console.error(err);
    console.log("✗ 커넥션 에러.");
    process.exit();
  });

// Front-End는 Vue로 분리해서 개발하기때문에, 뷰템플릿엔진은 필요 없음. 
//app.set("views", path.join(__dirname, "views"));
//app.set("view engine", "ejs");


app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));


//Router 
app.use("/api", mainRouter);

//Router 끝

/**
 * vue 연동 모듈
 * 해당 모듈은 꼭 Router 뒤에서 처리하도록 해야 한다.
 * */
app.use(history());


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
  res.render("error");
});


module.exports = app;
