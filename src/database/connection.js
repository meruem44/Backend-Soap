import mongoose from 'mongoose';

class Database {
    constructor() {
        this.connection = mongoose.connect('mongodb+srv://leandro:leandro@cluster0-ipcwz.mongodb.net/desafio?retryWrites=true&w=majority',{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    }
}

export default new Database().connection;