import { Router } from 'express';
import * as UsuarioController from '../controllers/usuarioController';
import * as PerguntasController from '../controllers/perguntaController';

const router = Router();

//pegando todos os usuarios
router.get('/usuarios', UsuarioController.all)

//pegando usuario pelo id
router.get('/usuario/:id', UsuarioController.getUsuarioById)

//pegando todas as perguntas
router.get('/perguntas', PerguntasController.all)

//pegando usuario pelo id
router.get('/pergunta/:id', PerguntasController.getPerguntaById)

export default router;