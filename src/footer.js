import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import "./css/footer.css";

const footer = () => {
  return (
    <footer>
      <p>
        Build with <FontAwesomeIcon icon={faHeart} className="faHeart" /> by
        Alex
      </p>
      <p>
        Inspect the code on{" "}
        <a href="https://github.com/Bumblebee7/favbooks/tree/Alpha/favbooks/src">
          Github
        </a>
      </p>
    </footer>
  );
};

export default footer;
