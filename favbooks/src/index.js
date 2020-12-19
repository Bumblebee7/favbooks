import React from "react";
import ReactDOM from "react-dom";

import Book from "./book";
import Header from "./header";
import Footer from "./footer";

const books = [
  {
    id: 1,
    image: "https://imgcdn.saxo.com/_9780135957059",
    title: "The Prgamatic Programmer 20th Anniersary Edition",
    author: "David Thomas and Andrew Hunt",
  },
  {
    id: 2,
    image:
      "https://www.kindleku.com/wp-content/uploads/2018/06/Bad-Blood-John-Carreyrou.jpg",
    title: "Bad Blood - Secrets and Lies in a Silicon Valley Startup",
    author: "John Carreyrou",
  },
];

function App() {
  return (
    <div>
      <Header />
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
