module.exports = {
  friendlyName: 'get tasks for help request',

  description: 'returns all tasks with the provided selectors',

  inputs: {
    category: {
      type: 'string',
      description: 'category of the task'
    },

    distance: {
      type: 'string',
      description: 'max distance'
    },
    location: {
      type: 'string',
      description: 'location of the user'
    },
    token: {
      type: 'string',
      description: 'token of the user'
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

    User.find({
      where: {token: inputs.token},
      select: ['id']
    }).then(async function (key) {
      /*let view = 'CREATE VIEW dist AS SELECT ST_distance_sphere(point)';
      let query = 'SELECT * FROM task where NOT owner = ' + '\' +' + key[0].id + '\'' + 'AND ';
     */
      let cat = [];
      let split = inputs.category.replace(/ /g, '').substr(1).slice(0, -1).split(',');
      split.forEach(function (obj) {
        cat.push(obj);
      });

      console.log(new Date());
      let data = await Task.find({
        and: [
          {status: 0},
          {owner: {'!=': key[0].id}},
          {category: {'in': cat}},
          {duedate: {'>=': new Date()}}
        ]
      }).sort('duedate ASC').catch(error => {
        sails.log.error(error);
        return exits.failure();
      });

      let response = [];
      data.forEach(function (tmp) {
        response.push(tmp);

      });
      console.log(response);

      return exits.success({'tasks': response});


    });

  }
};
