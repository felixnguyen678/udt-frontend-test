import React from "react";
import ReactDOMServer from 'react-dom/server'

const App = () => {
  return (
    <>Hello world in App</>
  )
}

const AppHTML = ReactDOMServer.renderToString(<App />);

export {App, AppHTML};
