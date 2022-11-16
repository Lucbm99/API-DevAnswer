import { Request, Response } from 'express';
import { Usuario } from '../models/Usuario';


export const all = async (request: Request, response: Response) => {
    const data = await Usuario.findAll();
    response.json({ data })
}

export const getUsuarioById = async (request: Request, response: Response) => {
    let { id } = request.params;
    let usuario = await Usuario.findByPk(id);

    if(usuario) {
        response.json({ usuario })
    } else {
        response.json({ error: 'Usuário não encontrado'})
    }

}
