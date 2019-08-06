const express = require("express");
const routes = new express.Router();
const devController = require("./controllers/DevController");
const likeController = require("./controllers/LikeController");
const dislikeController = require("./controllers/DislikeController");

routes.get("/", (req, res) => {
  res.send("<h1>Olá Mundo!</h1>");
});

routes.get("/devs", devController.index);
routes.post("/devs", devController.store);
routes.post("/devs/:id/like", likeController.store);
routes.post("/devs/:id/dislike", dislikeController.store);

module.exports = routes;
