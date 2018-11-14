var getBabelRelayPlugin = require('babel-plugin-relay');

var schemaData = require('./data/schema.json');

module.exports =  getBabelRelayPlugin(schemaData.data.__schema, {
    abortOnError: true
  });


