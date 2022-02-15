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
  console.log("login");

  res.render("login");
});

// router.get('/login', (req, res) => {
//   res.render('login');
// });

router.get("/signup", (req, res) => {
  
  
  res.render("signup");
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
