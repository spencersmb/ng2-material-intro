import {Observable} from 'rxjs/Observable';
import {User} from '../models/UserModel';
import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';

import 'rxjs/Rx';

export interface IUserService {
  selectedUser: User;
  loadAllUsers(): Observable<any[]>;
}

@Injectable()
export class UserService implements IUserService {

  constructor( public http: Http) {
  }
  selectedUser:User = null;
  search(): Observable<any[]> {
    return this.http.request('https://api.myjson.com/bins/2anob').map((res: any) => res.json());

  }
  loadAllUsers(): Observable<any[]> {
    return this.search();
  }
}

