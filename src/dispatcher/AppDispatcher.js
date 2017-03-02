import {Dispatcher}  from 'flux';

class AppDispatcher extends Dispatcher {

  /**
   * @param {object} action The details of the action, including the action's
   * type and additional data coming from the server.
   */
  handleServerAction(action) {
    var payload = {
      source: 'server',
      action: action
    };
    this.dispatch(payload);
  }

  /**
   * @param {object} action The details of the action, including the action's
   * type and additional data coming from the view.
   */
  handleViewAction(action) {
    var payload = {
      source: 'view',
      action: action
    };
    this.dispatch(payload);
  }

}

export default new AppDispatcher();