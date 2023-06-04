import produto from "../models/produtoModel.js";

class ProdutosController {
  static listarProdutos(req, res) {
    produto.find().exec((err, produto) => {
      res.status(200).json(produto);
    });
  }

  static listarProdutoPorId(req, res) {
    const id = req.params.id;

    produto.findById(id).exec((err, produto) => {
      if (err) {
        res
          .status(400)
          .send({ message: `${err.message} - Id do produto não localizado.` });
      } else {
        res.status(200).send(produto);
      }
    });
  }

  static cadastrarProduto(req, res) {
    const novoProduto = new produto(req.body);
    novoProduto.save((err) => {
      if (err) {
        console.error(err); // Log do erro para depuração
        res.status(500).send({
          message:
            "Ocorreu um erro ao cadastrar o produto. Por favor, tente novamente mais tarde.",
        });
      } else {
        res.status(201).send(novoProduto.toJSON());
      }
    });
  }

  static atualizarProduto(req, res) {
    const id = req.params.id;

    produto.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: "Produto atualizado com sucesso" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  }

  static excluirProduto(req, res) {
    const id = req.params.id;

    produto.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: "Produto removido com sucesso" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  }
}

export default ProdutosController;
