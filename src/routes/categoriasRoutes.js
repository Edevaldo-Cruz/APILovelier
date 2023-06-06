import express from "express";
import CategoriasController from "../controller/categoriasController";

const router = express.Router();

router.get("/categorias", CategoriasController.listarCategorias);
router.get("/categorias/:id", CategoriasController.listarCategoriaPorId);
router.post("/categoria", CategoriasController.cadastrarCategoria);
router.put("/categorias/:id", CategoriasController.atualizarCategoria);
router.delete("/categorias/:id", CategoriasController.excluirCategoria);

export default router;
