import { restart } from "nodemon";

export async function getAllBooks(req, res) {
  const message = "All books fetched successfully";
  
  const books = {
    id: 1,
    image: "example.com",
    title: "example",
    author: "Jhon Example",
    price: 20,
    description: "Lorem ipsum",
    isbn: 12345,
  };
  return res.status(201).json({message,  data: books });
}


export async function createNewBook(req, res) {
  const message = "Book created successfully";

  const data = {
    id: 123,
    image: "https://imagen.com/500/500",
    title: "Harry Potter",
    author: "J. K. Rowling",
    price: 100,
    description: "Libro de texto",
    isbn: "113-112"
  }

  return res.status(201).json({message, data});
}

export async function deleteBookById(req, res) {
  const message = "Book deleted successfully";

  const data = {
    id: 123,
    image: "https://imagen.com/500/500",
    title: "Harry Potter",
    author: "J. K. Rowling",
    price: 100,
    description: "Libro de texto",
    isbn: "113-112"
  }

  return res.status(201).json({message, data});
}

export async function updateABook(req, res) {
  const message = "Book updated successfully";

  const data = [
    {
      id: 123,
      image: "https://imagen.com/500/500",
      title: "Harry Potter Actualizado",
      author: "J. K. Rowling",
      price: 200,
      description: "Libro de texto",
      isbn: "113-112"
    },

    {
      id: 124,
      image: "https://imagen.com/500/500",
      title: "Demo",
      author: "Demo",
      price: 200,
      description: "Libro de texto",
      isbn: "113-113"
    }
  ];

  return res.status(201).json({message, data});
}



