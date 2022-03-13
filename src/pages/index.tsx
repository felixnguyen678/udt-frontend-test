import React from "react";
const ReactDOMServer = require("react-dom/server");

const Home = () => {
  return <>Hello world</>;
};

const HomeHTML: string = ReactDOMServer.renderToString(<Home />);

export { Home, HomeHTML };
