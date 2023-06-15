import mongoose from "mongoose";

const bannerSchema = new mongoose.Schema({
  id: { type: String },
  imagem: { type: String, required: true },
  descricao: { type: String, required: true },
  ativo: { type: Boolean, default: true },
  dataValidade: { type: Date },
});

const banner = mongoose.model("banner", bannerSchema);

export default banner;
