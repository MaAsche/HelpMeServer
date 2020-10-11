
module.exports = {
  friendlyName: 'get all tasks',

  description: 'returns all tasks from the user',

  inputs: {
    token: {
      type: 'string',
      required: true,
      description: 'The users token'
    }
  },

  exits: {
    success: {
      statusCode: 200,
    },

    nocontent: {
      statusCode: 204
    },

    failure: {
      statusCode: 400
    },
  },


  fn: async function (inputs, exits) {
    try {
      /*let key = await User.find({
        where: {token: inputs.token},
        select: ['id']
      });*/
      let data = await User.find({token: inputs.token}).populate('tasks');
      if (data.length > 0) {
        console.log(data);
        console.log(data[0].tasks);
        return exits.success({"tasks" : data[0].tasks});
      } else {
        return exits.nocontent();
      }
    } catch (error) {
      sails.log.error(error);
      return exits.failure();
    }


  }
};
