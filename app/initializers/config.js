import Em from 'ember';
import Config from 'ember-idx-utils/config'

export default {
  name: 'ember-idx-modal',
  initialize: function() {
    if (!Em.Config) {
        Em.Config = Config.create()
    }

    var defaultConfig = Em.Config.getConfig('bs');
    if (!defaultConfig) {
        Em.Config.addConfig('bs');
        defaultConfig = Em.Config.getConfig('bs');
    }

    defaultConfig['modal'] = {
        classes: ['em-modal', 'modal', 'fade'],
        bodyClasses: ['modal-body'],
        titleClasses: ['modal-header'],
        footerClasses: ['modal-footer']
    }
  }
};