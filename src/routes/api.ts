import { Router } from 'express';

import * as ImagemController from '../controllers/imageController';

const router = Router();

//pegando todas as imagens
router.get('/imagens', ImagemController.all)
router.get('/imagem/:id', ImagemController.getImagemById)

//pegando imagem pelo id
// router.get('/imagens', ImagemController.all)

export default router;