import { Router } from "express";
import { get_manhwa, post_manhwa } from "../controllers/manhwaController.js";

const router = Router();

router.get('/manhwa' , get_manhwa);
router.post('/manhwa' , post_manhwa);


export default router;