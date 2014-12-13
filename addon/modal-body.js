//(c) 2014 Indexia, Inc.
import Em from 'ember';
import WithConfigMixin from 'ember-idx-utils/mixin/with-config';
import StyleBindingsMixin from 'ember-idx-utils/mixin/style-bindings';

/**
 * `{{em-modal-body}}` component.
 *
 * The body of the modal
 *
 * @class ModalBody
 * @public
 */
export default Em.Component.extend(WithConfigMixin, StyleBindingsMixin, {
  classNameBindings: ['styleClasses'],

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
    return (_ref = this.get('config.modal.bodyClasses')) != null ? _ref.join(" ") : undefined;
  }).property()
});