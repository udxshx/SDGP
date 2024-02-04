const mongoose = require('mongoose');
const user = require('Backend/models/userModel');
const organizationModel =  mongoose.Schema({
    __typename: 'organizationModel',
    __id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    website: {
        type: String,
        required: false
    },
    logo: [
        {
          public_id: {
            type: String, //rename with id_logo 
            required: true,
          },
          url: {
            type: String,  //use gdrive://
            required: true,
          },
        },
      ],
    users: [user ,{
        role: 'admin',
    }],
});
const Organization = Mongoose.model("organizationModel", organizationModel)
module.exports = Organization;