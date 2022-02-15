const router = require("express").Router();
const { Item, Category, User } = require("../../models");

//get all users
router.get("/", (req, res) => {
  User.findAll({
    attributes: { exclude: ["password"] },
    include: {
      model: Item,
      attributes: ["id", "item_name", "category_id"],
      include: {
        model: Category,
        attributes: ["id", "category_name"],
      },
    },
  })
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => res.status(500).json(err));
});

//get single user
router.get("/:id", (req, res) => {
  User.findOne({
    where: { id: req.params.id },
    attributes: { exclude: ["password"] },
    include: {
      model: Item,
      attributes: ["id", "item_name", "category_id"],
      include: {
        model: Category,
        attributes: ["id", "category_name"],
      },
    },
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ Message: "No user found with this ID" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => res.status(500).json(err));
});

//update a user
router.put("/:id", (req, res) => {
  User.update(req.body, {
    individualHooks: true,
    where: { id: req.params.id },
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ Message: "No user found with this ID" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => res.status(500).json(err));
});

//create a user
// router.post('/', (req,res) =>{
//     User.create(req.body)
//     .then(dbUserData => res.json(dbUserData))
//     .catch(err => res.status(400).json(err))
// })

// New post with session attributes
router.post("/", (req, res) => {
  // expects {username: 'Lernantino',password: 'password1234'}
  User.create({
    username: req.body.username,
    password: req.body.password,
  })
    .then((dbUserData) => {
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;

        res.json(dbUserData);
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//login
router.post("/login", (req, res) => {
  User.findOne({
    where: {
      username: req.body.username,
    },
  }).then((dbUserData) => {
    if (!dbUserData) {
      res
        .status(400)
        .json({ Message: "No user associated with that username" });
      return;
    }

    const validPassword = dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ Message: "Incorrect password!" });
      return;
    }

    req.session.save(() => {
      // declare session variables
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;

      res.json({ user: dbUserData, message: "You are now logged in!" });
    });

    // res.json({ user: dbUserData, Message: "You are now logged in!" });
  });
});

// logout
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

//delete user
router.delete("/:id", (req, res) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ Message: "No user found with this ID" });
        return;
      }
    })
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
