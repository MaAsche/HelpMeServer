module.exports = {
  attributes: {
    name: {
      type: 'string',
      required: true
    },

    email: {
      type: 'string',
      required: true
    },

    address: {
      type: 'json',
      required: false
    },

    password: {
      type: 'string',
      required: true
    },

    phone: {
      type: 'string',
      required: false
    },

    token: {
      type: 'string',
      required: true
    },

    image: {
      type: 'ref',
      columnType: 'longblob',
      required: false
    },

    tasks: {
      collection: 'task',
      via: 'owner'
    }
  }
};
