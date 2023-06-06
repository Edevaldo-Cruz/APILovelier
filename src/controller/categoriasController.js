import categoria from "../models/categoriaModel.js";

class CategoriasController {
  static listarCategorias(req, res) {
    categoria.find().exec((err, categoria) => {
      res.status(200).json(categoria);
    });
  }

  static listarCategoriaPorId(req, res) {
    const id = req.params.id;

    categoria.findById(id).exec((err, categoria) => {
      if (err) {
        res
          .status(400)
          .send({
            message: `${err.message} - Id da categoria não localizado.`,
          });
      } else {
        res.status(200).send(categoria);
      }
    });
  }

  static cadastrarCategoria(req, res) {
    const novaCategoria = new categoria(req.body);
    novaCategoria.save((err) => {
      if (err) {
        console.error(err);
        res.status(500).send({
          message:
            "Ocorreu um erro ao cadastrar a categoria. Por favor, tente novamente mais tarde.",
        });
      } else {
        res.status(201).send(novaCategoria.toJSON());
      }
    });
  }

  static atualizarCategoria(req, res) {
    const id = req.params.id;

    categoria.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: "Categoria atualizada com sucesso" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  }

  static excluirCategoria(req, res) {
    const id = req.params.id;

    categoria.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: "Categoria removido com sucesso" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  }
}

export default CategoriasController;
