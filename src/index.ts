import express from "express";
import routes from "./routes";

const app = express();

const port = process.env.PORT || 4568;

app.use(routes)

app.listen(port, () => {
  console.log(`Escutando na porta ${port}`);
});
