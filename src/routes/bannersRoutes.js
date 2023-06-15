import express from "express";
import BannersController from "../controller/bannersController.js";

const router = express.Router();

router.get("/banners", BannersController.listarBanners);
router.get("/banners/:id", BannersController.listarBannerPorId);
router.post("/banner", BannersController.cadastrarBanner);
router.put("/banners/:id", BannersController.atualizarBanner);
router.delete("/banners/:id", BannersController.excluirBanner);

export default router;
