import express from "express";
import produto from "./produtosRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send({ tiulo: "Lovelier Joais" });
  });
  app.use(express.json(), produto);
};

export default routes;
