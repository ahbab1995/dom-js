// const Sequelize = require('sequelize');

// const CONNECTION_STRING = process.env.DATABASE_URL || 'postgres://urluser:myPassword@localhost:5432/urls';
// const db   = new Sequelize(CONNECTION_STRING)

// const User = db.define('user',{
//     name:Sequelize.TEXT,
//     email:{
//         type:Sequelize.TEXT,
//         unique:true
//     },
//     password:Sequelize.TEXT
// });

// const Direction = db.define('direction',{
//     destination:Sequelize.TEXT,
//     hash:Sequelize.TEXT
// })

// db.sync()
//    .then(d=>{
//        console.log('Databash Synced')
//    })
//    .catch(d=>{
//        console.log(d.message)
//    }) 

// module.exports = {
//     db,User,Direction
// }



                                // Mongodb Connection //


const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const db = mongoose.connection;


// DB connection

mongoose.connect('mongodb://localhost/urlshort_database', { useUnifiedTopology: true, useNewUrlParser: true });



let TestSchema = new Schema({
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
    password: { type: String, required: true }
});

const Direction = new Schema({
    user_id: Number,
    destination:String,
    hash:String
})


const Users = mongoose.model('url', TestSchema);


db.on('error', (err) => {
    console.log(err)
});

db.once('open', () => {
    console.log('database connect')
});

module.exports = {
    db, Users, Direction
}



