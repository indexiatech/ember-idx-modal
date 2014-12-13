import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.route( 'gettingstarted' );
    this.route( 'simple' );
    this.route( 'openifcloseif' );
    this.route( 'confirm' );
    this.route( 'reuse' );
    this.route( 'forms' );
    this.route( 'emforms' );
});

export default Router;
