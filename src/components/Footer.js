import React from "react";
import { useHistory } from "react-router-dom";

import drinkIcon from "../images/drinkIcon.svg";
import mealIcon from "../images/mealIcon.svg";
import "../css/Footer.css";

function Footer() {
  const history = useHistory();

  function redirect(page) {
    history.push(`/${page}`);
  }
  return (
    <div data-testid="footer" className="footer">
      <div className="footer-icon">
        <button
          type="button"
          onClick={() => redirect("foods")}
          className="footer-btn"
        >
          <img
            src={mealIcon}
            alt="Foods"
            data-testid="food-bottom-btn"
            className="footer-img"
          />
        </button>
      </div>
      <div className="footer-icon">
        <button
          type="button"
          onClick={() => redirect("drinks")}
          className="footer-btn"
        >
          <img
            src={drinkIcon}
            alt="Drink"
            data-testid="drinks-bottom-btn"
            className="footer-img"
          />
        </button>
      </div>
    </div>
  );
}
export default Footer;
