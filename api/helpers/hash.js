const bcrypt = require('bcrypt');

module.exports = {
  friendlyName: 'Hashing',

  description: 'hashing of passwords',

  inputs: {
    password: {
      type: 'string',
      example: '.password 142',
      description: 'userpassword',
      required: true
    }
  },

  fn: async function (inputs, exits) {

    bcrypt.hash(inputs.password, 10).then(
      hash => {
        return exits.success(hash);
      },
      err => {
        return exits.failure(err);
      }
    );
  }


};
