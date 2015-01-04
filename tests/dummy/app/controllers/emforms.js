import Ember from "ember";

export default Ember.ArrayController.extend({
  submitting: false,
  newUser: undefined,
  actions: {
    initUser: function() {
      return this.initNew();
    },
    addUser: function(m, e) {
      return e.promise = this.fakePromise(this.get('newUser')).then((function(_this) {
        return function(t) {
          _this.set('model', _this.get('store').find('user'));
          return _this.initNew();
        };
      })(this));
    }
  },
  initNew: function() {
    return this.set('newUser', this.get('store').createRecord('user'));
  },
  fakePromise: function(objToReturn) {
    return new Ember.RSVP.Promise(function(res, rej) {
      return Ember.run.later(function() {
        return res(objToReturn);
      }, 1500);
    });
  }
});
