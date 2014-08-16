import Ember from 'ember';

export default Ember.ObjectController.extend({
  validThumbnailUrl: function() {
    return /^http[s]?:\/\//.test(this.get('data.thumbnail'));
  }.property('data.thumbnail')
});
