//CURD

const { Router } = require("express");
const fs = require("fs");

const { validate, ValidationError, Joi } = require("express-validation");

const movieRouter = Router();
movieRouter.get("/", (req, res) => {
  res.send("movie get 122345");
});

const movieDatabase = {
  body: Joi.object({
    Id: Joi.number().required(),
    Name: Joi.string().required(),
    Rating: Joi.number().required(),
    Description: Joi.string().required(),
    Genre: Joi.string().required(),
    Cast: Joi.string().required(),
  }),
};

// ID
// Name
// Rating
// Description
// Genre
// Cast


movieRouter.post("/", validate(movieDatabase, {}, {}), (req, res) => {
  console.log(req.body);
  // res.end("Products Created");
  fs.readFile("./db.json", { encoding: "utf-8" }, (err, data) => {
    const parsed = JSON.parse(data);
    parsed.movies = [...parsed.movies, req.body];

    fs.writeFile(
      "./db.json",
      JSON.stringify(parsed),
      { encoding: "utf-8" },
      () => {
        res.end("Product created");
      },
    );
  });
});

module.exports = movieRouter;
