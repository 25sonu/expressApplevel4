const BookModel = require('../models/bookModel');

exports.createBook = async (req, res) => {
    try {
        let singleBook = new BookModel({ title: req.body.title, author: req.body.author });
        singleBook = await singleBook.save();
        res.send(singleBook);
    } catch (err) {
        res.status(400).send(err.message);
    }
};

exports.getAllBooks = async (req, res) => {
    try {
        const allBooks = await BookModel.find();
        res.send(allBooks);
    } catch (err) {
        res.status(400).send(err.message);
    }
};

