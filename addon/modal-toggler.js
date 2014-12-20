//(c) 2014 Indexia, Inc.
import Em from 'ember';
import Modal from './modal';
import WithConfigMixin from 'ember-idx-utils/mixin/with-config';
import StyleBindingsMixin from 'ember-idx-utils/mixin/style-bindings';

/**
 * `{{em-modal-toggler}}` component.
 *
 * A component to toggle the visibility of a modal
 *
 * @class ModalToggler
 * @event on-toggle triggered when the toggler is clicked before changing the visibility of the modal
 *   @param toggler Toggler - This instance of the toggler
 * @public
 */

export default Em.Component.extend(WithConfigMixin, StyleBindingsMixin, {
  attributeBindings: ['disabled', 'type'],
  tagName: 'button',
  classNameBindings: ['styleClasses'],
  type: 'button',

  /**
   * The CSS classes that will be attached to the DOM element of the modal
   * Classes should be configured externally by using the `config` object.
   *
   * @property styleClasses
   * @private
   * @type String
   */
  styleClasses: (function() {
    var _ref;
    return (_ref = this.get('config.modal.togglerClasses')) != null ? _ref.join(" ") : void 0;
  }).property(),

  /**
   * Toggle the visibility of the modal that this toggler controls.
   *
   * @method toggleVisibility
   * @private
   */
  toggleVisibility: (function() {
    this.sendAction('on-toggle', this);
    return this.get('modal').toggleVisibility();
  }).on('click'),

  /**
   * Find the modal view and set it as a `modal` property
   * A toggler can live as a descendant (not neccessarily a direct one) of a modal or outside of the modal chain
   * TODO: Assert modal existance
   * @method modalAsProperty
   */
  modalAsProperty: (function() {
    var modalAsAncestor;
    modalAsAncestor = this.nearestOfType(Modal);
    if (modalAsAncestor) {
      return this.set('modal', modalAsAncestor);
    } else {
      return Em.run.schedule('afterRender', this, function() {
        return this.set('modal', Em.View.views[this.get('modal-id')]);
      });
    }
  }).on('willInsertElement')
});