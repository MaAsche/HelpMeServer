const moment = require('moment');
const formatter = 'YYYY-MM-DD';

module.exports = {

  friendlyName: 'Create Task',

  description: 'Adds a task to the database',

  inputs: {
    description: {
      type: 'string',
      description: 'Description of the Task',
      required: false,
      example: 'cut the lawn'
    },

    category: {
      type: 'number',
      description: 'Request category (garden, shopping, etc.)',
      required: true
    },

    duedate: {
      type: 'ref',
      columnType: 'date',
      required: false
    },

    location: {
      type: 'string',
    },


    owner: {
      type: 'string',
      required: true,
      description: 'the users token'
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
  },

  fn: async function (inputs, exits) {
    let key = await User.find({
      where: {token: inputs.owner},
      select: ['id']
    }).catch(error => {
      sails.log.error(error);
      return exits.failure();
    });

    Task.create({
      category: parseInt(inputs.category),
      description: inputs.description,
      duedate: new Date(inputs.duedate),
      owner: key[0].id,
      status: 0
    }).fetch().then(function (task) {
      console.log(task);
      console.log(task.id);
      return exits.success({id: task.id});

    }).catch(error => {
      sails.log.error(error);
      return exits.failure();
    });


    /*
        let point = inputs.location.split(',');
        Task.count().then(function (tmp) {
          let tmp2 = parseInt(tmp) + 1;
          let query = 'INSERT INTO task (id, duedate, description, category, status, location, owner) VALUES (' + tmp2 + ',' + '\'' + inputs.duedate + '\'' + ',' + '\' ' + inputs.description + ' \',' + parseInt(inputs.category) + ',' + 0 + ',POINT(' + point[0] + ',' + point[1] + '),' + key[0].id + ');';
          sails.sendNativeQuery(query).then(() => {
            return exits.success({id : tmp2});
          }).catch(error => {
            sails.log.error(error);
            return exits.failure();
          });
        }).catch(error => {
          sails.log.error(error);
          console.log(error);
          return exits.failure();
        });
    */
  }


};
