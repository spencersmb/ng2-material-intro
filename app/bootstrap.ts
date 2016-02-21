import {provide} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {AppCmp} from './components/app/app';
import {MATERIAL_PROVIDERS} from 'ng2-material/all';
import {UserService} from './services/userService';
import {HTTP_PROVIDERS} from 'angular2/http';

bootstrap(AppCmp, [
  ROUTER_PROVIDERS, MATERIAL_PROVIDERS, HTTP_PROVIDERS, UserService,
  provide(LocationStrategy, { useClass: HashLocationStrategy }),
  provide(Window, {useValue: window})
]);
