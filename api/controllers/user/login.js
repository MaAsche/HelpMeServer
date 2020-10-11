const bcrypt = require('bcrypt');

module.exports = {
  friendlyName: 'login',

  description: 'userlogin',

  inputs: {
    email: {
      type: 'string',
      required: true,
      example: 'example@gmail.com',
      description: 'email for the app'
    },

    password: {
      type: 'string',
      required: true,
      example: '.passsword142',
      description: 'password for the app'
    }
  },


  exits: {
    success: {
      statusCode: 200,
      responseType: '',

    },
    failure: {
      statusCode: 400,
      responseType: ''
    },

    noMatch: {
      statusCode: 401,
      responseType: ''
    }
  },

  fn: async function (inputs, exits) {

    User.find({
      where: {email: inputs.email},
      select: ['token', 'password', 'name', 'phone', 'image']
    }).then(async function (data) {
      bcrypt.compare(inputs.password, data[0].password).then(function (result) {
        if (result) {
          let picture = "";
          if(data[0].image !== null){
            picture = data[0].image.toString()
          }
          let response = new Object();
          response.token = data[0].token;
          response.name = data[0].name;
          response.phone = data[0].phone;
          response.image = picture;
          return exits.success(JSON.stringify(response));
        } else {
          return exits.noMatch();
        }

      }).catch(error => {
        sails.log.error(error);
        return exits.failure();
      });

    }).catch(error => {
      sails.log.error(error);
      return exits.noMatch();
    });
  }
};
