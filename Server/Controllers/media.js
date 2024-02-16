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

let displayCreateForm = (req, res, next) => {
    res.render('media/create', { title: 'Add New Media' });
};

let createMedia = async (req, res, next) => {
    // save new media to DB
    await Media.create(req.body);

    // redirect
    res.redirect('/media');
};

let deleteMedia = async (req, res, next) => {
    // remove selected doc
    await Media.findByIdAndDelete(req.params._id);
    // await Media.deleteOne({ _id: req.params._id }); - this works too

    // redirect
    res.redirect('/media');
};

let displayEditForm = async (req, res, next) => {
    let media = await Media.findById(req.params._id);

    res.render('media/edit', { 
        title: 'Update Media',
        media: media
    });
};

// make public
module.exports = {
    index, displayCreateForm, createMedia, deleteMedia, displayEditForm
};