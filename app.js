const express = require("express");
const session = require("express-session");
const { sequelize } = require("./db/models");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const store = new SequelizeStore({ db: sequelize });


const createError = require("http-errors");
const path = require("path");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");

const homeRouter = require("./routes/home");
const usersRouter = require("./routes/users");
const bookRouter = require("./routes/book-info");
const bookshelfRouter = require("./routes/bookshelf");
const { restoreUser } = require("./auth");

const app = express();
app.set("view engine", "pug");
app.locals.moment = require('moment');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(morgan("dev"));
app.use(cookieParser());

app.use(
  session({
    secret: "superSecret",
    store,
    saveUninitialized: false,
    resave: false,
  })
);

store.sync();
app.use(restoreUser);
app.use("/", homeRouter);
app.use("/user", usersRouter);
app.use("/book", bookRouter);
app.use("/bookshelf", bookshelfRouter);

app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
