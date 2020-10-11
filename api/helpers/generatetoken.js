const CodeRain = require('coderain');

const cr = new CodeRain("#####################");

module.exports = {
  friendlyName: 'Token generator',
  description: 'generates a random token to identify a user',

  fn: async function () {
    return cr.next();
  }

};
