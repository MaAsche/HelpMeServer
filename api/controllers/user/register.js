module.exports = {
  friendlyName: 'Registration',

  description: 'registration of a new user',

  inputs: {
    username: {
      type: 'string',
      required: true,
      example: 'Max',
      description: 'username for the app'
    },
    password: {
      type: 'string',
      required: true,
      example: '.passsword142',
      description: 'password for the app'
    },

    email: {
      type: 'string',
      required: true,
      example: 'example@gmail.com',
      description: 'email for the app'
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

    duplicate: {
      statusCode: 409,
      responseType: ''
    }
  },
  fn: async function (inputs, exits) {
    let tmpUser = await User.find({email: inputs.email});
    if (tmpUser.length > 0) {
      return exits.duplicate();
    }
    let pwd = await sails.helpers.hash(inputs.password);
    let token = await sails.helpers.generatetoken();
    User.create({
      name: inputs.username,
      email: inputs.email,
      password: pwd.toString(),
      token: token.toString()

    }).then(() => {
      return exits.success({"token" : token});
    }).catch(error => {
      sails.log.error(error);
      return exits.failure();
    });
  }
};
