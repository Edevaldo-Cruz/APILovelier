import banner from "../models/bannerModel.js";

class BannersController {
  static listarBanners(req, res) {
    banner.find().exec((err, banner) => {
      res.status(200).json(banner);
    });
  }

  static listarBannerPorId(req, res) {
    const id = req.params.id;

    banner.findById(id).exec((err, banner) => {
      if (err) {
        res.status(400).send({
          message: `${err.message} - Id do banner não localizado.`,
        });
      } else {
        res.status(200).send(banner);
      }
    });
  }

  static cadastrarBanner(req, res) {
    const novoBanner = new banner(req.body);
    novoBanner.save((err) => {
      if (err) {
        console.error(err);
        res.status(500).send({
          message:
            "Ocorreu um erro ao cadastrar o banner. Por favor, tente novamente mais tarde.",
        });
      } else {
        res.status(201).send(novoBanner.toJSON());
      }
    });
  }

  static atualizarBanner(req, res) {
    const id = req.params.id;

    banner.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: "Banner atualizada com sucesso" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  }

  static excluirBanner(req, res) {
    const id = req.params.id;

    banner.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: "Banner removido com sucesso" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  }
}

export default BannersController;
