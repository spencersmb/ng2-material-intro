import {Component, ViewEncapsulation} from 'angular2/core';
import {
  RouteConfig,
  ROUTER_DIRECTIVES
} from 'angular2/router';
// import {HTTP_PROVIDERS} from 'angular2/http';
import {MATERIAL_DIRECTIVES} from 'ng2-material/all';

import {HomeCmp} from '../home/home';
import {UserService} from '../../services/userService';
import {SideNav} from '../sidenav/sidenav';
//import {AboutCmp} from '../about/about';
//import {PeopleList} from '../../services/people_list';

@Component({
  selector: 'app',
  templateUrl: './components/app/app.html',
  styleUrls: ['./components/app/app.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [ROUTER_DIRECTIVES, MATERIAL_DIRECTIVES, SideNav],
  providers:[UserService]
})
@RouteConfig([
  { path: '/', component: HomeCmp, as: 'Home' },
])
export class AppCmp {



  constructor(){

  }
  ngOnInit(): void {

  }
}
