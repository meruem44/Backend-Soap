import mongoose, { Schema, model } from 'mongoose';

const InformationUser = new Schema({
    user_id: {
        type: mongoose.Types.ObjectId,
        ref: 'Deale'
    },
    spendProduct: {
        default: 0,
        type: Number,

    },
    spendSold: {
        default: 0,
        type: Number,
    },
    tax: {
        default: 0,
        type: Number,
    },
    profit: {
        default: 0,
        type: Number,
    }
}, {
    timestamps: true
});

export default model('InformationUser', InformationUser);