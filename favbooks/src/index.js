import React from "react";
import ReactDOM from "react-dom";

import Book from "./book";
import Header from "./header";
import Footer from "./footer";

function App() {
  return (
    <div>
      <Header />
      <Book />
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
