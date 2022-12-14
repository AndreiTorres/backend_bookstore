import { Router } from "express";
import { getAllUsers, signUp, login } from "../controller/user.mock.controller";

const router = Router();

router.post("/signUp", signUp);
router.post("/login", login);
router.get("/", getAllUsers);

export default router;
