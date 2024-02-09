let index = (req, res, next) => {
    res.render('media/index', { title: 'Media Library' });
};

// make public
module.exports = {
    index
};