import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  autenticate() {
    window.open('https://x-spotify.firebaseapp.com/redirect#access_token=BQAbOu50LuNM9715wMFxOFIMMAgkDf1UeJHYMGH6XzWVM99CG2b_aHlX6A74pmbCQR91_YqUcjmOvPBsOSoY2AcTNigcVImj_rie3uu8WYNS5H29EWdqpKKBKSPScA7o406gvVFsehDaENvhWvUjkg4y5SHPwjBmDx8CG4F-6foX9iy6EBo&token_type=Bearer&expires_in=3600&state=123');
  }

}
