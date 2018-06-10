import { Component, OnInit, Inject } from '@angular/core';
import { UserService } from '../_services/user.service';
import * as _ from 'lodash';
import { AosToken } from '../aos';  

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  results: any;
  type: string = null;
  loading: boolean = false;
  constructor(private userService: UserService, @Inject(AosToken) aos) {
    aos.init();

   }

  ngOnInit() {
    this.userService.loadUser();
  }

  getResults(results) {
    this.results = results.results;
    this.type = results.type;
    // console.log( this.results);
  }

  setLoading(value: boolean) {
    this.loading = value;  
  }

  startCase() {
    var title =  _.startCase(this.type);
    //console.log(title.charAt(title.length - 1));
    
    if (title.charAt(title.length - 1)!='s') {
      title = title+'s'
    }
    return title;
  }

}
