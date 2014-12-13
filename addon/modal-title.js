//(c) 2014 Indexia, Inc.
import Em from 'ember';
import WithConfigMixin from 'ember-idx-utils/mixin/with-config';
import StyleBindingsMixin from 'ember-idx-utils/mixin/style-bindings';

/**
 * `{{em-modal-title}}` component.
 *
 * The title of the modal
 *
 * @class ModalTitle
 * @public
 */

export default Em.Component.extend(WithConfigMixin, StyleBindingsMixin, {
  classNameBindings: ['styleClasses', 'classes'],

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
    return (_ref = this.get('config.modal.titleClasses')) != null ? _ref.join(" ") : void 0;
  }).property(),

  /**
   * Register the title within the modal
   * Note: Expects this title to be the direct descendant of the modal component
   *
   * @method registerInModal
   * @private
   */
  registerInModal: function() {
    return (this.get('parentView').setTitle(this)).on('init');
  }
});
