import { EventEmitter } from 'events';
import Actions from '../actions/Actions';
import Dispatcher from '../dispatcher/AppDispatcher';
    
var _value = 'react';
var _count = 0;

class Store extends EventEmitter {

  constructor() {
    super();

    var self = this;

    this.dispatchToken = Dispatcher.register(function(payload) {

      var action = payload.action;
      switch(action.type) {
        
        case Actions.TYPES.SET:
          _value = action.value;
          self.emit('change');
          break;
          
        case Actions.TYPES.ADD:
          _count += action.n;
          self.emit('change');
          break;
      }
    });

  }
  
  get() {
    return {
      value: _value,
      count: _count
    }
  }  
}


/**
 * Expose
 */
export default new Store();