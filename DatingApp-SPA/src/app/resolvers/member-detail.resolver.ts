import {Injectable} from '@angular/core';
import {User} from '../models/user';
import {Resolve, ActivatedRouteSnapshot, Router} from '@angular/router';
import {UserService} from '../services/user.service';
import { Observable, of } from 'rxjs';
import { AlertifyService } from '../services/alertify.service';
import { catchError } from 'rxjs/operators';

@Injectable()
export class MemberDetailResolver implements Resolve<User> {
  constructor(private userService: UserService,
              private router: Router, private alertify: AlertifyService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<User> {
      return this.userService.getUser(route.params['id']).pipe(
        catchError(error => {
          this.alertify.error('Problem retrieving data');
          this.router.navigate(['/members']);
          return of(null);
        })
      );
    }
}

