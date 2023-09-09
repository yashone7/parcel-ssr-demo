import express from "express";
import App from "./client/App";
import ReactDOM from "react-dom/server";

const app = express();

app.use(express.static("build"));

const port = 3000;

app.get("/", (req, res, next) => {
  const initialState = { count: 3 };

  const appMarkup = ReactDOM.renderToString(
    <App initialProps={initialState} />
  );

  const html = `
    <html>
      <head>
        <title>Your React App</title>
      </head>
      <body>
        <div id="root">${appMarkup}</div>
        <script>
          window.initialState = ${JSON.stringify(initialState)};
        </script>
        <script src="index.js" async type="text/javascript"></script>
      </body>
    </html>
  `;

  res.send(html);
});

app.listen(port, () => console.log("server running on port 3000"));
