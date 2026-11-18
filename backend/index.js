import express from "express"; // Corrección 1: sin punto y coma
import "dotenv/config";
import cors from "cors";
import rutausuario from "./src/modules/usuario/usuario.routes.js"; // Corrección 2: con .js

const app = express();
const PORT = process.env.PORT || 4100;

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Rutas
app.get("/", (req, res) => {
  res.send("¡Hola, mundo!");
});

app.use("/api", rutausuario);

app.listen(PORT, () => {
  console.log(`Servidor Iniciado en el puerto ${PORT}`);
});
