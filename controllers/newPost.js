module.exports = (req, res) => {
  if (req.session.userId) {
    let imageError = false;
    let titleError = false;
    let descriptionError = false;

    if (typeof req.flash("titleError")[0] != "undefined") {
      titleError = true;
    }

    if (typeof req.flash("descriptionError")[0] != "undefined") {
      descriptionError = true;
    }

    if (typeof req.flash("imageError")[0] != "undefined") {
      imageError = true;
    }

    return res.render("create", {
      createPost: true,
      titleError: titleError,
      descriptionError: descriptionError,
      imageError: imageError
    });
  }
  res.redirect("/auth/login");
};
