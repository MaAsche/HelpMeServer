module.exports = {

  friendlyName: 'get all tasks',

  description: 'returns the number of all tasks combined',

  exits: {
    success: {
      statusCode: 200
    },

    failure: {
      statusCode: 400
    }
  },


  fn: async function (inputs, exits) {
    try {
      let done = await Task.count({status: 1});
      let open = await Task.count({status: 0});
      let response = new Object();
      response.open = open;
      response.done = done;
      return exits.success(JSON.stringify(response));
    } catch (e) {
      sails.log.error(e);
      return exits.failure();
    }




  }
};
