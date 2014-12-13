import Em from 'ember';

export default Em.ArrayController.extend({
  needs: ['application'],
  model: [
    {route: 'gettingstarted', text: 'Getting Started'},
    {route: 'simple', text: 'Simple'},
    {route: 'openifcloseif', text: 'Open If / Close If'},
    {route: 'confirm', text: 'Confirm'},
    {route: 'forms', text: 'Forms'},
    {route: 'emforms', text: 'Ember Forms'}
  ]
});