import React from "react";
import ReactDOM from "react-dom";

import "./css/index.css";

import Books from "./books";
import Book from "./book";
import Header from "./header";
import Footer from "./footer";

function App() {
  return (
    <div>
      <Header />
      <main>
        {Books.map((book) => {
          return <Book key={book.id} {...book} />;
        })}
      </main>
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
