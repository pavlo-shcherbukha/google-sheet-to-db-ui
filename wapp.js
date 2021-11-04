var express = require("express");
var history = require("connect-history-api-fallback");
var app = express();
var path = require("path");

// Middleware for serving '/dist' directory
const serveStatic = require("serve-static");
//const staticFileMiddleware = express.static("./dist");
const staticFileMiddleware = express.static(path.join(__dirname, './dist'));
// 1st call for unredirected requests
app.use(staticFileMiddleware);

// Support history api
/*
app.use(
  history({
    index: "./dist/index.html"
  })
);*/

app.use(
  history({
    index: "index.html"
  })
);

// 2nd call for redirected requests
app.use(staticFileMiddleware);
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, ad-name, x-powered-by, date");
  res.header('Access-Control-Allow-Methods', 'DELETE,GET,PATCH,POST,PUT');
  res.header('Content-Type', 'application/json; charset=utf-8');
  next();
});



/*
app.all("*", async (_req, res) => {
  try {
    res.sendFile("./dist/index.html");
  } catch (error) {
    res.json({ success: false, message: "Something went wrong" });
  }
});
*/
/*********** 
app.get("/", async (_req, res) => {
  try {
    res.sendFile("./dist/index.html");
  } catch (error) {
    res.json({ success: false, message: "Something went wrong" });
  }
});

*************/


app.listen(8080, function () {
  console.log("Example app listening on port 8080!");
});
