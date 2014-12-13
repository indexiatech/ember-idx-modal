import Em from 'ember';
import Config from 'ember-idx-utils/config'

export default {
  name: 'ember-idx-modal',
  initialize: function() {
    if (!Em.Config) {
        Em.Config = Config = Config.create()
    }

    var defaultConfig = Config.getConfig('bs');
    if (!defaultConfig) {
        Config.addConfig('bs');
        defaultConfig = Config.getConfig('bs');
    }

    defaultConfig['modal'] = {
        classes: ['em-modal', 'modal', 'fade'],
        bodyClasses: ['modal-body'],
        titleClasses: ['modal-header'],
        footerClasses: ['modal-footer']
    }
  }
};