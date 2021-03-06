import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('route01');
  this.route('route02');
  this.route('route03a');
  this.route('route04');
  this.route('route11');
});

export default Router;