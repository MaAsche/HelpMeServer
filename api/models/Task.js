module.exports = {
  attributes: {
    description: {
      type: 'string',
      required: false
    },
    category: {
      type: 'string',
      required: true
    },
    duedate: {
      type: 'ref',
      columnType: 'date',
      required: false
    },

    status: {
      type: 'number',
      description: '0 -> to do, 1 -> done, 2 -> inProgress, 3 -> expired'
    },

    location: {
      type: 'ref',
      columnType: 'POINT'
    },

    owner: {
      model: 'user'
    }
  }


};
