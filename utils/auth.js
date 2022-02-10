const withAuth = (req, res, next) => {
  if (!req.session.user_id) {
    //not sure if 'user_id' is correct
    res.redirect("/login");
  } else {
    next();
  }
};

module.exports = withAuth;
