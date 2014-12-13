import Ember from "ember";
import delay from 'ember-idx-utils/utils/delay';

export default Ember.Controller.extend({
  open: false,
  close: false,
  actions: {
    confirm: function(setPromise) {
      var that = this;
      var promise = delay(1000).then(function() {
        that.set('close', true);
        return "Success";
      });
      setPromise(promise);
    }
  }
});