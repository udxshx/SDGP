const organization = new Schema({
    __typename: 'organization',
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
});