//CURD

const {Router} = require("express");

const groceriesRouter = Router();

groceriesRouter.get("/", (req,res) => {
  //
  res.send("groceries get 122345")
});

groceriesRouter.post("/", (req,res) => {
  //
  res.send("groceries post");
});

module.exports = groceriesRouter;
