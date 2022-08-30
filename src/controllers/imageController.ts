import { Request, Response } from 'express';
import { Imagem } from './../models/Imagem';


export const all = async (request: Request, response: Response) => {
    const listaImagens = await Imagem.findAll();
    response.json({ listaImagens })
}