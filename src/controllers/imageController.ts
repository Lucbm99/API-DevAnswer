import { Request, Response } from 'express';
import { Imagem } from './../models/Imagem';


export const all = async (request: Request, response: Response) => {
    const data = await Imagem.findAll();
    response.json({ data })
}

export const getImagemById = async (request: Request, response: Response) => {
    let { id } = request.params;
    let imagem = await Imagem.findByPk(id);

    if(imagem) {
        response.json({ imagem })
    } else {
        response.json({ error: 'Imagem não encontrada'})
    }

}
