module.exports = (req, res, next) => {
  if (req.body.title == null || req.body.title === "") {
    req.flash("titleError", true);
    return res.redirect("/posts/new");
  } else if (req.body.description == null || req.body.description === "") {
    req.flash("descriptionError", true);
    return res.redirect("/posts/new");
  } else if (req.files == null) {
    req.flash("imageError", true);
    return res.redirect("/posts/new");
  }
  next();
};
