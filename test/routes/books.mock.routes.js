import { Router } from "express";
import { getAllBooks, createNewBook, deleteBookById, updateABook } from "../controller/book.mock.controller";

const router = Router();

router.get("/", getAllBooks);
router.post("/createNewBook", createNewBook);
router.delete("/delete/123", deleteBookById);
router.put("/update/123", updateABook);

export default router;
