'use strict';

describe('MyApp', function () {

  // load the module
  beforeEach(module('bwtstcomp1'));

  var scope,
    compile;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$rootScope_, _$compile_) {
    scope = _$rootScope_;
    compile = _$compile_;
  }));

  it('should load the template', function () {
    var linkFn, directive;

    linkFn = compile('<div data-comp-test1 td-msg="{{msg}}"></div>');

    directive = linkFn(scope);

    scope.msg = 'My test message';

    scope.$digest();

    expect(directive[0].innerText).toContain('test message');
  });
});
