import { Component, OnInit } from '@angular/core';
import { UsersService } from '../user-service/users.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  public usersCount = 0;

  constructor(private userService: UsersService) {
    this.userService.getNumeroUsuarios.subscribe(
      (usersCount) => this.usersCount = usersCount
    );
  }

  ngOnInit() {
  }

}
