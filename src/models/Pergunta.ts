import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';

export interface PerguntaInstance extends Model {
    id: number;
    area: string;
    categoria: string;
    enunciado: string;
    opcoes: string;
    resposta_certa: string; 
}

export const Pergunta = sequelize.define<PerguntaInstance>('questoes', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    }, 
    area: {
        type: DataTypes.STRING
    },
    categoria: {
        type: DataTypes.STRING
    },
    enunciado: {
        type: DataTypes.STRING
    },
    opcoes: {
        type: DataTypes.STRING
    },
    resposta_certa: {
        type: DataTypes.STRING
    },
}, {
    tableName: 'questoes',
    timestamps: false
})