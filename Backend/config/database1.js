const express = require('express');
const mongoose = require('mongoose');
const DB_URI = "mongodb+srv://imethp2:HanXidU0128@testdb.wcfmlfc.mongodb.net/?retryWrites=true&w=majority";

const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
    }
const database = module.exports = () => {
    connectionParams.useNewUrlParser = true;
    connectionParams.useUnifiedTopology = true;
    try 
    {
    mongoose.connect(DB_URI, connectionParams)
    console.log(`Connected to database ${mongoose.connection.host}`);
}
   catch (error) {
    console.log(`Error connecting to the database. \n${error}`);
}
}


