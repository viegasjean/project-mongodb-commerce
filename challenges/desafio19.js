db.produtos.updateMany(
  { ingredientes: { $all: ["hamburguer"] } },
  { $pull: { ingredientes: "cebola" } },
);

db.produtos.find({}, { _id: false, nome: true, ingredientes: true });