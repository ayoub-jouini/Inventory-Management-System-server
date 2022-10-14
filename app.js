const express = require("express");
const helmet = require("helmet");

const HttpError = require("./utils/http-error");

const app = express();

// set security HTTP headers
app.use(helmet());

// parse json request body
app.use(express.json());

//access control
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  next();
});

//graphql route

//page not found error 404
app.use((req, res, next) => {
  const error = new HttpError("Could not find this route.", 404);
  throw error;
});

//the unknown error
app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }

  res.status(error.code || 500);
  res.json({ message: error.message || "an unknown error occured" });
});

// open mongoose connection

// listen to requests
app.listen(5000, () => {
  console.log("listen : 5000");
});
