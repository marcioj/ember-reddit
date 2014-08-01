import Ember from 'ember';
import startApp from '../helpers/start-app';
import { hotFixture } from '../helpers/hot-fixture';

var App;

module('Acceptance: Hot', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('visiting /hot', function() {
  visit('/hot');

  andThen(function() {
    equal(find('h4').eq(0).text(), 'My buddy is an NFL running back. His kids dressed as Flash and Batman to fight him dressed as Bane.');
    equal(find('h4').eq(1).text(), 'More selfies drawn by strangers');
  });
});
