const Book = require("../Model/book");

// To add a book to the directory

const toAddBook = async (req, res) => {
  const title = req.body.title;
  try {
    const book = await Book.findOne({ where: { title } }); // checking the books already exist in the directory
    if (book) {
      res
        .status(400)
        .json({ message: "This book is already recorded in the directory" });
    } else {
      const newBook = await Book.create({ title });
      res.status(200).json({ message: "Book added successfully" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// To get all books in ascending order

const getAllBooks = async (req, res) => {
  console.log("all working");
  try {
    const books = await Book.findAll({ order: [["title", "ASC"]] });
    res.status(200).json(books);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// To get a book by Search

const toGetBookBySearch = async (req, res) => {
  const title = req.params.title;
  try {
    const book = await Book.findOne({ where: { title } });
    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ message: "Book is not available in this name" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// To update the title in the directory

const toUpdateTitle = async (req, res) => {
  const title = req.params.title;
  console.log(title);
  const newTitle = req.body.newTitle;
  console.log(newTitle);
  try {
    const book = await Book.findOne({ where: { title } });
    if (book) {
      book.title = newTitle;
      await book.save();
      res.status(200).json({ message: "Successfully updated the title" });
    } else {
      res.status(400).json({ message: "No book is available with this title" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// To delete a book from directory

const toDeleteBook = async (req, res) => {
  const title = req.params.title;
  try {
    const book = await Book.findOne({ where: { title } });
    if (book) {
      await book.destroy();
      res.json({ message: "Book deleted successfully" });
    } else {
      res.status(404).json({ message: "Book not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getAllBooks,
  toAddBook,
  toGetBookBySearch,
  toUpdateTitle,
  toDeleteBook,
};
