const req = require("express/lib/request");
const { Item, User } = require("../models");
const { findAll, getAttributes } = require("../models/Category");
const sequelize = require('sequelize')

const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("homepage",{loggedIn: req.session.loggedIn});
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
<<<<<<< HEAD
=======
  console.log("login");
>>>>>>> ea18f0dafe49c5cb28554f11767b66b4ffd16fa1

  res.render("login");
});

router.get('/login', (req, res) => {
  res.render('login');
});

<<<<<<< HEAD
router.get('/signup', (req, res) => {
  res.render('signup');
=======
router.get("/signup", (req, res) => {
  
  
  res.render("signup");
>>>>>>> ea18f0dafe49c5cb28554f11767b66b4ffd16fa1
});

router.get("/:id", (req,res) => {
  Item.findAll({
    where: {category_id : req.params.id},
    attributes: ['id', 'category_id', 'picture', 'item_name'],
    include: {
      model: User,
      attributes: ['username']
    }
  })
  .then(dbItemData => {
    const items = dbItemData.map(item => item.get({plain: true}))
    console.log(req.session)

    res.render('homepage', {
      items,
      loggedIn: req.session.loggedIn
    })
  })
  .catch(err =>{
    console.log(err)
    res.status(500).json(err)
  })
})


module.exports = router;
