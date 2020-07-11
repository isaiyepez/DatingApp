import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AlertifyService } from '../services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  // Injecting our Auth service inside our component constructor:
  constructor(public authService: AuthService, private alertify: AlertifyService,
              private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      this.alertify.success('Logged in sucessfully');
    }, error => {
      this.alertify.error('Failed to login');
    }, () => {
      this.router.navigate(['/members']);
    });
    // console.log(this.model);
  }

  loggedIn(){
     // const token = localStorage.getItem('token');
     // return !!token; // If token is true, it will return true. otherwise,  it will return false.

    // We substituted the code above for this new version since we are now using our angular
    // jwt validator, and it should be added as a service.

     return this.authService.loggedIn();
  }

  logout() {
    localStorage.removeItem('token');
    this.alertify.message('logged out');
    this.router.navigate(['/home']);
  }
}
