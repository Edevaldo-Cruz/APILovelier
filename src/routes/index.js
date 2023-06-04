import express from "express";
import produto from "./produtosRoutes.js";
import cors from "cors";

const routes = (app) => {
  app.use(
    cors({
      origin: "*",
      methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    })
  );
  app.route("/").get((req, res) => {
    res.status(200).send({ tiulo: "Lovelier Joais" });
  });
  app.use(express.json(), produto);
};

export default routes;
