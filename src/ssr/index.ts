const ReactDOMServer = require("react-dom/server");
const express = require("express");
const { HomeHTML } = require("../pages");

const app = express();
const port = 3000;

app.get("/", async (req: any, res: any) => {
  const jsx = HomeHTML;
  const clientBundleScript = `<script src="http://localhost:8080/scripts/bundle.js"></script>`; // [B]
  const clientBundleStyle = `<link rel="stylesheet" href="http://localhost:8080/styles/bundle.css">`; // [B]

  res.send(`
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>My SSR App</title>
                ${clientBundleStyle} <!-- [B] -->
            </head>
            <body>
                <div id='ssr-app'>${jsx}</div> <!-- [A] -->
                ${clientBundleScript} <!-- [B] -->
            </body>
        </html>
    `);
});

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});
