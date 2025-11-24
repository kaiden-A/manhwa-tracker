import { Router } from "express";
import { get_manhwa, post_manhwa, update_manhwa } from "../controllers/manhwaController.js";

const router = Router();

router.get('/manhwa' , get_manhwa);
router.post('/manhwa' , post_manhwa);
router.put('/manhwa/:id' , update_manhwa)


export default router;