import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  user: any;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUser().subscribe(res=>{
      this.user = res;      
    })
  }

}
