import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route("buttons");
  this.route("colors");
  this.route('online-banners', function() {
    this.route('wireframes');
    this.route('samples');
  });
  this.route('webinars');
  this.route('logo');
  this.route('typography');
});

export default Router;
