// Media model for CRUD
let Media = require('../Models/media');

let index = async (req, res, next) => {
    // fetch all media docs 
    let media = await Media.find();

    console.log(media);
    res.render('media/index', { 
        title: 'Media Library',
        media: media
    });
};

// make public
module.exports = {
    index
};