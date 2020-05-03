import mongoose, { Schema, model } from 'mongoose';

const TaxSchema = new Schema({
    id_Dealer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Deale'
    },
    value: Number,
    pay: {
        type: Boolean,
        default: false
    },
    id_Transaction: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Transaction'
    }
}, {
    timestamps: true
});

export default model('Tax', TaxSchema);