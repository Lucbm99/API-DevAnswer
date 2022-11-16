import { Request, Response } from 'express';
import { Pergunta } from '../models/Pergunta';


export const all = async (request: Request, response: Response) => {
    const data = await Pergunta.findAll();
    response.json({ data })
}

export const getPerguntaById = async (request: Request, response: Response) => {
    let { id } = request.params;
    let pergunta = await Pergunta.findByPk(id);

    if(pergunta) {
        response.json({ pergunta })
    } else {
        response.json({ error: 'Pergunta não encontrada'})
    }

}
