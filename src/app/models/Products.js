import mongoose ,{ Schema, model } from 'mongoose';

const ProductsSchema = new Schema({
    name: String,
    description: String,
    amount: Number,
    url: String,
},{
    timestamps: true
});

export default model('Products', ProductsSchema);