import { test, moduleFor } from 'ember-qunit';

moduleFor('controller:entry', 'EntryController', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it exists', function() {
  var controller = this.subject();
  ok(controller);
});

test('#validThumbnailUrl returns true for http urls', function() {
  var controller = this.subject();
  controller.set('model', { data: {} });
  controller.set('data.thumbnail', 'http://foo.com');
  ok(controller.get('validThumbnailUrl'));
});

test('#validThumbnailUrl returns true for https urls', function() {
  var controller = this.subject();
  controller.set('model', { data: {} });
  controller.set('data.thumbnail', 'http://foo.com');
  ok(controller.get('validThumbnailUrl'));
});

test('#validThumbnailUrl returns false for empty urls', function() {
  var controller = this.subject();
  controller.set('model', { data: {} });
  controller.set('data.thumbnail', '');
  ok(!controller.get('validThumbnailUrl'));
});

test('#validThumbnailUrl returns false for not valid urls', function() {
  var controller = this.subject();
  controller.set('model', { data: {} });
  controller.set('data.thumbnail', 'hue');
  ok(!controller.get('validThumbnailUrl'));
});
