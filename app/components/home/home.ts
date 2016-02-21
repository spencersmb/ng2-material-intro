import {Component} from 'angular2/core';
import {UserService} from '../../services/userService';
import {User} from '../../models/UserModel';
import 'rxjs/Rx';

@Component({
  selector: 'home',
  templateUrl: './components/home/home.html',
  styleUrls: ['./components/home/home.css'],
  providers: [UserService]
})
export class HomeCmp {
  users: User[];
  constructor(public userService: UserService) {

  }
  ngOnInit(): void {
    this.getUsers();
  }
  getUsers(): void {
    this.userService
        .loadAllUsers()
        .subscribe(res => this.renderTrack(res));
  }
  renderTrack(res: any): void {
    this.users = res;
    console.log(this.users);
  }
}

