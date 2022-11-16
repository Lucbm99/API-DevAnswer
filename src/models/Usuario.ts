import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';

export interface UsuarioInstance extends Model {
    id: number;
    nome_completo: string;
    nome_usuario: string;
    email: string;
    senha: string;
}

export const Usuario = sequelize.define<UsuarioInstance>('usuario', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    }, 
    nome_completo: {
        type: DataTypes.STRING
    },
    nome_usuario: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    senha: {
        type: DataTypes.STRING
    },
}, {
    tableName: 'usuario',
    timestamps: false
})