import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://edevaldocruz:lnzMVknoEqiV1kEQ@banco1.h5bxdig.mongodb.net/dbLovelierJoias"
);

let db = mongoose.connection;

export default db;
