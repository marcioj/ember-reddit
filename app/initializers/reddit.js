export default {
  name: 'reddit',
  initialize: function(container, app) {
    app.inject('route', 'reddit', 'service:reddit');
  }
};
