import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { map }                from 'rxjs/operators';
import 'rxjs/add/operator/filter';
import { AuthenticationService } from '../_services/authentication.service';
import { TokenService } from '../_services/token.service';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html'
})
export class RedirectComponent implements OnInit {
  token: any;
  sub: Subscription;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService, 
  private tokenService: TokenService) { }

  ngOnInit() {
    this.route.fragment.subscribe((fragment: string) => {
      // console.log("My hash fragment is here => ", fragment)
      fragment = fragment.slice(0, -44)
      fragment = fragment.slice(13)
      // console.log(fragment);
      this.tokenService.setToken(`Bearer ${fragment}`);
      this.router.navigate(['/home']);
  })
    
  }

}
