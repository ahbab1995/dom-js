const mongoose = require('mongoose');
const db = mongoose.connection;
const Schema = mongoose.Schema


// DB connection

mongoose.connect('mongodb://localhost/client_database', { useNewUrlParser: true });

let ItemSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    email: {
        type: String,
        lowercase: true,
        unique: true,
        required: 'Email address is required'
        
    },
    date: { 
        type: Date, 
        default: Date.now 
    }
})

const Item = mongoose.model('clientItem', ItemSchema);


db.on('error', (err) => {
    console.log(err)
});

db.once('open', () => {
    console.log('database connect')
});

module.exports = {db,Item}
