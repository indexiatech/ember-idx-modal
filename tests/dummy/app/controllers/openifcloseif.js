import Ember from "ember";

export default Ember.Controller.extend({
  openModal: false,
  closeModal: false,
  message: void 0,
  actions: {
    raise: function() {
      return this.set('openModal', true);
    },
    save: function() {
      if (this.get('checkMe')) {
        return this.set('closeModal', true);
      } else {
        return this.set('message', 'Check the checkbox first!');
      }
    }
  }
});
