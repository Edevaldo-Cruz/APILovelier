import express from "express";
import produto from "./produtosRoutes.js";

const routes = (app) => {
  // Configuração do cabeçalho Access-Control-Allow-Origin
  app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
  });

  app.route("/").get((req, res) => {
    res.status(200).send({ tiulo: "Lovelier Joais" });
  });
  app.use(express.json(), produto);
};

export default routes;
