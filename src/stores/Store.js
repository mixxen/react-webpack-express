var assign = require('object-assign'),
    EventEmitter = require('events').EventEmitter,
    Actions = require('../actions/Actions'),
    Dispatcher = require('../dispatcher/AppDispatcher');
    
var _value = 'react';
var _count = 0;

var Store = assign({}, EventEmitter.prototype, {
  get: function() {
    return {
      value: _value,
      count: _count
    }
  }  
});

Store.dispatchToken = Dispatcher.register(function(payload) {

  var action = payload.action;
  switch(action.type) {
    
    case Actions.TYPES.SET:
      _value = action.value;
      Store.emit('change');
      break;
      
    case Actions.TYPES.ADD:
      _count += action.n;
      Store.emit('change');
      break;
  }
});


/**
 * Expose
 */
exports = module.exports = Store;