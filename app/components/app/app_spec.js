var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var testing_internal_1 = require('angular2/testing_internal');
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var location_mock_1 = require('angular2/src/mock/location_mock');
var router_2 = require('angular2/src/router/router');
var dom_adapter_1 = require('angular2/src/platform/dom/dom_adapter');
var app_1 = require('./app');
function main() {
    testing_internal_1.describe('App component', function () {
        testing_internal_1.beforeEachProviders(function () { return [
            router_1.RouteRegistry,
            core_1.DirectiveResolver,
            core_1.provide(router_1.Location, { useClass: location_mock_1.SpyLocation }),
            core_1.provide(router_1.ROUTER_PRIMARY_COMPONENT, { useValue: app_1.AppCmp }),
            core_1.provide(router_1.Router, { useClass: router_2.RootRouter })
        ]; });
        testing_internal_1.it('should work', testing_internal_1.injectAsync([testing_internal_1.TestComponentBuilder], function (tcb) {
            return tcb.overrideTemplate(TestComponent, '<div><app></app></div>')
                .createAsync(TestComponent)
                .then(function (rootTC) {
                rootTC.detectChanges();
                var appDOMEl = rootTC.debugElement.componentViewChildren[0].nativeElement;
                testing_internal_1.expect(dom_adapter_1.DOM.querySelectorAll(appDOMEl, 'section > nav > a')[1].href).toMatch(/http:\/\/localhost:\d+\/about/);
            });
        }));
    });
}
exports.main = main;
var TestComponent = (function () {
    function TestComponent() {
    }
    TestComponent = __decorate([
        core_1.Component({ selector: 'test-cmp' }),
        core_1.View({ directives: [app_1.AppCmp] }), 
        __metadata('design:paramtypes', [])
    ], TestComponent);
    return TestComponent;
})();
//# sourceMappingURL=app_spec.js.map