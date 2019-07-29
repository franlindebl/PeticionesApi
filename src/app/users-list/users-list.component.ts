import { Component, OnInit } from '@angular/core';
import { UsersService } from '../user-service/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  public users = null;
  public currentUserNumber = 0;

  constructor(private userService: UsersService) {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    });

    this.userService.getNumeroUsuarios.subscribe(
      (usersCount) => this.currentUserNumber = usersCount
    );
  }

  ngOnInit() {
  }

  public addOneToUserList() {
    this.userService.addOneToUsers();
  }
}
