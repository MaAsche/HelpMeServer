module.exports = {
  friendlyName: 'change status',

  description: 'changes the status of a task',


  inputs: {
    status: {
      type: 'string'
    },
    id: {
      type: 'string'
    }
  },
  exits: {
    success: {
      statusCode: 200
    },
    failure: {
      statusCode: 400
    }
  },

  fn: async function (inputs, exits) {
    console.log(inputs);
    let task = await Task.update({id: inputs.id}).set({status: inputs.status}).fetch().catch(error => {
      sails.log.error(error);
      return exits.failure();
    });
    return exits.success(task[0]);
  }
};
