import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  // Injecting our Auth service inside our component constructor:
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      console.log('Logged in sucessfully');
    }, error => {
      console.log('Failed to login');
    });
    console.log(this.model);
  }

  loggedIn(){
    const token = localStorage.getItem('token');
    return !!token; // If token is true, it will return true. otherwise,  it will return false.
  }

  logout() {
    localStorage.removeItem('token');
    console.log('logged out');
  }

}
