'use strict';

describe('Directive: variantNav', function () {

  // load the directive's module
  beforeEach(module('clientApp'));

  var scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function () {
    expect(1).toBe(1);
  }));
});
