import mongoose from "mongoose";

const categoriaSchema = new mongoose.Schema({
  id: { type: String },
  nome: { type: String, required: true },
  ativo: { type: Boolean, default: true },
});

const categoria = mongoose.model("categoria", categoriaSchema);

export default categoria;
