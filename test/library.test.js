import supertest from "supertest";
import app from "./app.mock";


describe("TBC-1: Registrarse en el sistema", () => {
  it("Debe devolver el mensaje correcto y los datos del usuario que se registró", async () => {
    const response = await supertest(app).post("/api-mock/users/signUp");
    expect(response.body).toEqual({
      message: "Sign up successfully",
      data: {
        id: 1,
        fullName: "Jose Ruiz",
        email: "jose@example.com",
        password: "passwordtest1",
      },
    });
  });
});

describe("TBC-2: Iniciar sesión en el sistema",  () => {
  
  it("Debe devolver el mensaje correcto y los datos del usuario que acaba de iniciar sesión", async () => {

    const response = await supertest(app).post("/api-mock/users/login");

    expect(response.body).toEqual({
      message: "Login successfully",
      userName: "Jesus",
      token: "token123"
    });
  });
});

describe("TBC-3: Añadir recursos a la biblioteca", () => {

  it("Debe devolver el mensaje correcto y los datos del libro que se agregó", async () => {
    const response = await supertest(app).post("/api-mock/books/createNewBook");

    expect(response.body).toEqual({
      message: "Book created successfully",
      data: {
        id: 123,
        image: "https://imagen.com/500/500",
        title: "Harry Potter",
        author: "J. K. Rowling",
        price: 100,
        description: "Libro de texto",
        isbn: "113-112"
      }
    });
  });


});

describe("TBC-4: Eliminar recursos de la biblioteca", () => {

  it("Debe devolver el mensaje correcto y los datos del libro que se eliminó de la biblioteca", async () => {
    const response = await supertest(app).delete("/api-mock/books/delete/123");

    expect(response.body).toEqual({
      message: "Book deleted successfully",
      data: {
        id: 123,
        image: "https://imagen.com/500/500",
        title: "Harry Potter",
        author: "J. K. Rowling",
        price: 100,
        description: "Libro de texto",
        isbn: "113-112"
      }
    });
  });


});

describe("TBC-5: Editar los recursos de la biblioteca", () => {
  it("Debe devolver el mensaje correcto y todos los libros de la biblioteca", async () => {
    const response = await supertest(app).put("/api-mock/books/update/123");

    expect(response.body).toEqual({
      message: "Book updated successfully",
      data: [
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
      ]
    });
  });


});


describe("TBC-6: Obtener todos los recursos de la biblioteca", () => {
  it("Devuelve el mensaje correcto y todos los libros almacenados en la biblioteca", async () => {
    const response = await supertest(app).get("/api-mock/books");
    expect(response.body).toEqual({
      message: "All books fetched successfully",
      data: {
        id: 1,
        image: "example.com",
        title: "example",
        author: "Jhon Example",
        price: 20,
        description: "Lorem ipsum",
        isbn: 12345,
      },
    });
  });
});


