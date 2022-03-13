import React from "react";
// import {hot} from "react-hot-loader";
// import "../styles/Home.module.css"
const ReactDOMServer = require("react-dom/server");

const Home = () => {
  return (
    <div className="c-calculator">
      <div className="c-calculator__screen">
        <span className="c-screen__number">0</span>
      </div>
      <div className="c-calculator__keypad">
        <button className="c-calculator__button--third">AC</button>
        <button className="c-calculator__button--third">+/-</button>
        <button className="c-calculator__button--third">%</button>
        <button className="c-calculator__button--secondary">/</button>
        <button className="c-calculator__button">7</button>
        <button className="c-calculator__button">8</button>
        <button className="c-calculator__button">9</button>
        <button className="c-calculator__button--secondary">*</button>
        <button className="c-calculator__button">4</button>
        <button className="c-calculator__button">5</button>
        <button className="c-calculator__button">6</button>
        <button className="c-calculator__button--secondary">-</button>
        <button className="c-calculator__button">1</button>
        <button className="c-calculator__button">2</button>
        <button className="c-calculator__button">3</button>
        <button className="c-calculator__button--secondary">+</button>
        <button className="c-calculator__button--large">0</button>
        <button className="c-calculator__button">,</button>
        <button className="c-calculator__button--secondary">=</button>
      </div>
    </div>
  );
};

const HomeHTML: string = ReactDOMServer.renderToString(<Home />);

export { Home, HomeHTML };
