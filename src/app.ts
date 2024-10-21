import "dotenv/config";
import express from "express";
import cors from "cors";
//import { router } from "./routes/item";
import { router } from "./routes"; // lo mismo que tener ./routes/index
import db from "./config/mongo";

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

// conectar a la base de datos
db().then(() => console.log("conexión exitosa"))

app.listen(PORT, () => {
    console.log(`Listo por el puerto ${PORT}`);
})