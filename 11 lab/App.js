import React, { useState } from "react";
import BookList from "./BookList.js";
import BookForm from "./BookForm.js";

export default function App() {
  const [books, setBooks] = useState([
    { id: 1, title: "Мастер и Маргарита", author: "М. Булгаков" },
    { id: 2, title: "Преступление и наказание", author: "Ф. Достоевский" },
  ]);

  const addBook = (book) => {
    setBooks([...books, { id: Date.now(), ...book }]);
  };

  const deleteBook = (id) => {
    setBooks(books.filter((b) => b.id !== id));
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1> Моя библиотека</h1>
      <BookForm onAdd={addBook} />
      <BookList books={books} onDelete={deleteBook} />
    </div>
  );
}