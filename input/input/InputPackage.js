'use strict';

var InputNode = require('./InputNode');
var InputComponent = require('./InputComponent');

module.exports = {
  name: 'input',
  configure: function(config) {
    config.addNode(InputNode);
    config.addComponent(InputNode.static.name, InputComponent);
    config.addLabel('input', 'Input');
    config.addStyle(__dirname+'/_input.scss');
  }
};
