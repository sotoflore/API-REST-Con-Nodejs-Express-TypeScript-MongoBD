import { Router } from "express";
import { getItems } from "../controllers/order";
import { checkJwt } from "../middleware/sesion";

// Esta ruta solo puede acceder las paersonas que tienen la sesión activa
//  que tenga un JWT válido

const router = Router();

router.get('/', checkJwt, getItems);

export { router };