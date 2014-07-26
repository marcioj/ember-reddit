import { test, moduleFor } from 'ember-qunit';
import { defineFixture } from 'ic-ajax';
import { hotFixture } from '../../helpers/hot-fixture';


moduleFor('service:reddit', 'RedditService', {
  // Specify the other units that are required for this test.
  // needs: ['service:foo']
});

// Replace this with your real tests.
test('it exists', function() {
  var service = this.subject();
  ok(service);
});

test('it fetch the data', function() {
  expect(2);
  var service = this.subject();
  service.hot().then(function(data) {
    equal(data.kind, 'Listing');
    equal(data.data.children.length, 25);
  });
});
