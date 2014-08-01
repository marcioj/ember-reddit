import Ember from 'ember';

var Router = Ember.Router.extend({
  location: EmberRedditENV.locationType
});

Router.map(function() {
  this.route('hot');
});

export default Router;
