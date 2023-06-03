import mongoose from "mongoose";

const produtoSchema = new mongoose.Schema({
  id: { type: String },
  nome: { type: String, required: true },
  descricao: { type: String, required: true },
  preco: { type: Number, required: true },
  categoria: { type: String, required: true },
  imagem: { type: String },
  disponibilidade: { type: Boolean, default: true },
  destaque: { type: Boolean, default: true },
});

const produto = mongoose.model("produto", produtoSchema);

export default produto;
