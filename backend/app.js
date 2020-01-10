var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var mainRouter = require("./routes/main/mainController");

var app = express();

//vue 연동 라이브러리
app.use(require("connect-history-api-fallback")());

// Sequelize Sync 맞추는 부분
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

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", mainRouter);

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
