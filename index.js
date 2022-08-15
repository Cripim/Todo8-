import Express from "express";
import db from "./data/db.js";
import tips from "./controllers/controller.js";

const index = Express();
index.use(Express.json());

tips(index, db);

index.listen(4000, () => {
  console.log("Servidor ativo em: http://localhost:4000");
});
