import mongoose, { Schema, model } from 'mongoose';

const TransactionSchema = new Schema({
    id_Dealer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Deale'
    },
    date: {
        type: Date,
        default: new Date()
    },
    amount: Number,
    value: Number,
    id_product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Products'
    }
}, {
    timestamps: true
});

export default model('Transaction', TransactionSchema);