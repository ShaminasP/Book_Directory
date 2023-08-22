const express = require("express");
const router = express.Router();
const {
  getAllBooks,
  toAddBook,
  toGetBookBySearch,
  toUpdateTitle,
  toDeleteBook,
} = require("../Controller/bookController");  

router.route("/").get(getAllBooks).post(toAddBook);


router
  .route("/:title")
  .get(toGetBookBySearch) 
  .put(toUpdateTitle)
  .delete(toDeleteBook);

module.exports = router;
