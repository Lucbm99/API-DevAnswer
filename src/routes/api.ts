import { Router } from 'express';

import * as ImagemController from '../controllers/imageController';

const router = Router();

//pegando todas as imagens
router.get('/imagens', ImagemController.all)

//pegando imagem pelo id
// router.get('/imagens', ImagemController.all)

export default router;