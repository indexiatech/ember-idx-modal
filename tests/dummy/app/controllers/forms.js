import Ember from "ember";

export default Ember.ArrayController.extend({
  message: 'Please submit or cancel the form.',
  model: [
    {
      title: 'tag1'
    }, {
      title: 'tag2'
    }
  ],
  submitting: false,
  newTag: undefined,
  initNewTag: (function() {
    return this.set('newTag', {});
  }).on('init'),
  actions: {
    addTag: function(m, e) {
      return e.promise = this.fakePromise(this.get('tag')).then((function(_this) {
        return function(t) {
          _this.model.addObject(_this.get('newTag'));
          return _this.initNewTag();
        };
      })(this));
    },
    cancelled: function() {
      return this.set('message', '<b>Form did not submit.</b>');
    }
  },
  fakePromise: function(objToReturn) {
    return new Ember.RSVP.Promise((function(_this) {
      return function(res, rej) {
        return Ember.run.later(function() {
          _this.set('message', '<b>Form submitted!</b>');
          return res(objToReturn);
        }, 1500);
      };
    })(this));
  }
});

