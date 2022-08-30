import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';

export interface ImagemInstance extends Model {
    id: number;
    imagem: string;
}

export const Imagem = sequelize.define<ImagemInstance>('imagens', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    }, 
    imagem: {
        type: DataTypes.BLOB
    }
}, {
    tableName: 'imagens',
    timestamps: false
})