import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Object.extend({
  host: 'http://www.reddit.com/',
  request: function(path) {
    return ajax(this.host + path + '.json');
  },
  hot: function() {
    return this.request('hot');
  }
});
