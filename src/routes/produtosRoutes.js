import express from "express";
import ProdutosController from "../controller/produtosController.js";

const router = express.Router();

router.get("/produtos", ProdutosController.listarProdutos);
router.get("/produtos/:id", ProdutosController.listarProdutoPorId);
router.post("/produto", ProdutosController.cadastrarProduto);
router.put("/produtos/:id", ProdutosController.atualizarProduto);
router.delete("/produtos/:id", ProdutosController.excluirProduto);

export default router;
