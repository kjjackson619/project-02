const path = require("path");
const express = require("express");
<<<<<<< HEAD
const session = require("express-session");
const exphbs = require("express-handlebars");
const hbs = exphbs.create({});

const routes = require('./controllers');
=======
// const session = require("express-session");
// const exphbs = require("express-handlebars");
>>>>>>> 5e59bd857931834701a0b14d50b4634b2510e7c1

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection");
// const SequelizeStore = require("connect-session-sequelize")(session.Store);

// const sess = {
//   secret: "Super secret secret",
//   cookie: {},
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize,
//   }),
// };

<<<<<<< HEAD
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(session(sess));
=======
// app.use(session(sess));
>>>>>>> 5e59bd857931834701a0b14d50b4634b2510e7c1

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// app.use(require("./models"));

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
