import Ember from 'ember';

export default Ember.ArrayController.extend({
  tag: void 0,
  actions: {
    setTagInModal: function(toggler) {
      return this.set('tag', toggler.get('tag'));
    }
  }
});