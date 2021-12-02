const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const Valor = new Schema({
    producto: String,
    precio: String,
    fecha: Date 
    
});
    module.exports = mongoose.model('valores', Valor); 