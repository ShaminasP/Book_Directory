# Book Directory API

A simple Node.js Express API for managing a book directory using Sequelize and MySQL.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- Get all books in alphabetical order
- Search for a book by title
- Add a new book
- Delete a book by title
- Update a book's title

## Technologies

- Node.js
- Express.js
- Sequelize (with MySQL)
- Body-parser

## Getting Started

1. Clone the repository:
   ```sh
   https://github.com/ShaminasP/Book_Directory.git

  Install dependencies:
    npm install
    
  Start the server:
     npm run dev
     
 API Endpoints
 
GET /books: Get all books in alphabetical order.
GET /books/:title: Search for a book by title.
POST /books: Add a new book.
PUT /books/:title: Update a book's title by title.
DELETE /books/:title: Delete a book by title.    


Certainly! Here's an example of a simple Git README file content that you can use as a starting point. You can customize this template according to your project's details and needs.

markdown
Copy code
# Book Directory API

A simple Node.js Express API for managing a book directory using Sequelize and MySQL.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- Get all books in alphabetical order
- Search for a book by title
- Add a new book
- Delete a book by title
- Update a book's title

## Technologies

- Node.js
- Express.js
- Sequelize (with MySQL)
- Body-parser

## Getting Started

1. Clone the repository:
   git clone https://github.com/your-username/book-directory-api.git
   
Install dependencies:
cd book-directory-api
npm install
Set up your MySQL database and update the config/config.json file with your database credentials.

Start the server:
npm run dev
API Endpoints
GET /books: Get all books in alphabetical order.
GET /books/:title: Search for a book by title.
POST /books: Add a new book.
PUT /books/:id: Update a book's title by ID.
DELETE /books/:title: Delete a book by title.


Usage
You can use tools like Postman to test the API endpoints. Make sure to replace http://localhost:3000 with the appropriate URL.

Contributing
Contributions are welcome! If you find any issues or want to add enhancements, feel free to submit a pull request.

Fork the project.
Create your feature branch (git checkout -b feature/your-feature).
Commit your changes (git commit -m 'Add some feature').
Push to the branch (git push origin feature/your-feature).
Open a pull request.
