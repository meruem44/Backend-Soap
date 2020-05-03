import mongoose ,{ Schema, model } from 'mongoose';

const DealeSchema = new Schema({
    name: String,
    cpf: String,
    email: String,
    password: String
},{
    timestamps: true
});

export default model('Deale', DealeSchema);