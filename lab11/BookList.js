import React from "react";

export default function BookList({ books, onDelete }) {
  if (books.length === 0) {
    return <p>Пока нет добавленных книг.</p>;
  }

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {books.map((book) => (
        <li
          key={book.id}
          style={{
            border: "1px solid #ccc",
            margin: "8px 0",
            padding: "8px",
            borderRadius: "8px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span>
            <strong>{book.title}</strong> — {book.author}
          </span>
          <button
            onClick={() => onDelete(book.id)}
            style={{
              background: "#f44336",
              color: "#fff",
              border: "none",
              padding: "5px 10px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Удалить
          </button>
        </li>
      ))}
    </ul>
  );
}