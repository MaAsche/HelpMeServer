module.exports = {
  friendlyName: 'delete task',

  description: 'deletes a task',

  inputs: {
    task: {
      type: 'number',
      required: true,
      description: 'Primary ke of the task'
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
    Task.destroy({id: inputs.task}).then(() => {
      return exits.success();
    }).catch(error => {
        sails.log.error(error);
        return exits.failure();
      }
    );
  }
};
