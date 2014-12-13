//(c) 2014 Indexia, Inc.
import ModalConfirm from './modal-confirm';

/*
 * A confirmation modal with a reason
 * @class ModalConfirmWithReason
 */
export default ModalConfirm.extend({
  reasonModal: true,

  /*
   * If true a reason must be selected
   */
  required: true,

  /*
   * Add '--select--' option
   */
  'add-select-option': true,

  /*
   * Reason options
   */
  reasons: void 0,

  /*
   * If true, another reason 'other' will be added.
   * When user selects 'other', a textbox will be visibile to input the reason
   */
  other: true,

  /*
   * The chosen reason
   */
  reason: void 0
});
