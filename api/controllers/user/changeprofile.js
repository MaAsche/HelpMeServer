module.exports = {

  friendlyName: 'change profile',

  description: 'change profile data in db',

  inputs: {
    username: {
      type: 'string'
    },

    phone: {
      type: 'string'
    },

    email: {
      type: 'string'
    },

    image : {
      type: 'string',
    },

    token: {
      type: 'string'
    }
  },


  exits: {
    success: {
      code: 200
    },

    failure: {
      code: 400
    }
  },

  fn: async function (inputs, exits) {


    User.update({token: inputs.token})
      .set({
        name: inputs.username,
        phone: Number(inputs.phone),
        email: inputs.email,
        image: inputs.image
      }).fetch()
      .then(_ =>
      exits.success())
      .catch(error => {
        sails.log.error(error);
        return exits.failure();
      });
  }
};
