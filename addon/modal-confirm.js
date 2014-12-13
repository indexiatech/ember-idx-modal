//(c) 2014 Indexia, Inc.
import Em from 'ember';

/**
 * A confirmation modal with 'Yes' & 'No' buttons
 * When 'no' is pressed the modal is just closed.
 * When 'yes' is pressed an action bound to the action on the controller set in the `confirm` property is invoked, 
 * giving the controller a chance to decide whether to close the modal or not.
 *
 * @class ModalConfirm
 */
export default Em.Component.extend({
  /**
   * Bound to the action on the controller to be invoked when the 'yes' button is pressed.
   * @property confirm
   * @public
   */
  confirm: "confirm",

  /**
   * The default title of the modal if not set otherwise.
   *
   * @property title
   * @public
   */
  title: 'Please confirm',

  /**
   * The default message of the modal if not set otherwise.
   *
   * @property message
   * @public
   */
  message: 'Please press Yes to confirm the operation.',
  'modal-title-classes': '',
  'cancel-button-title': 'No',
  'cancel-button-icons': 'fa fa-thumbs-o-down',
  'cancel-button-classes': 'btn btn-primary',
  'submit-button-classes': 'btn btn-default',
  'submit-button-title': 'Yes',
  'submit-button-submitting-title': 'Submitting...',
  'submit-button-default-icons': 'fa fa-thumbs-o-up',
  'submit-button-execute-icons': 'fa fa-spinner fa-spin',
  actions: {

    /**
     * Invoked when the user clicks the "Yes" button, triggers an action on the controller.
     * 
     * @method confirmPressed
     * @private
     */
    confirmPressed: function(setPromise) {
      return this.sendAction('confirm', setPromise);
    }
  }
});
