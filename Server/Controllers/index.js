const User = require('../Models/user');

/**
 * This function will display the home page
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
function DisplayHome(req, res, next)
{
  /* Now Render the hbs page */
  res.render('index', {title: 'VeggiMedia', page: 'home', user: req.user});
}

function DisplayAbout(req, res, next) {
  let date = new Date();

  res.render('about', {
    title: 'About',
    date: date,
    user: req.user
  });
}

module.exports = {
 DisplayHome: DisplayHome,
 DisplayAbout: DisplayAbout
}

  