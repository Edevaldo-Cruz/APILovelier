import express from "express";
import produto from "./produtosRoutes.js";
import cors from "cors";

const app = express();

// Configuração do CORS usando o middleware cors
app.use(
  cors({
    origin: ["https://lovelier-joias.netlify.app", "http://localhost:3000"],
  })
);

app.route("/").get((req, res) => {
  res.status(200).send({ tiulo: "Lovelier Joais" });
});

app.use(express.json(), produto);

export default app;
