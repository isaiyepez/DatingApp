import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { RouterModule} from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';
import { NgxGalleryModule } from 'ngx-gallery-9';
import { FileUploadModule } from 'ng2-file-upload';
import { TimeagoModule } from 'ngx-timeago';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ErrorInterceptorProvider } from './services/error.interceptor';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberCardComponent } from './members/member-card/member-card.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { appRoutes } from './routes';
import { UserService } from './services/user.service';
import { MemberDetailResolver } from './resolvers/member-detail.resolver';
import { MemberListResolver } from './resolvers/member-list.resolver';
import { MemberEditResolver } from './resolvers/member-edit.resolver';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { PreventUnsavedChanges } from './guards/prevent-unsaved-changes.guard';
import { AuthGuard } from './guards/auth.guard';
import { PhotoEditorComponent } from './members/photo-editor/photo-editor.component';
import { ListsResolver } from './resolvers/lists.resolver';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      MemberListComponent,
      ListsComponent,
      MessagesComponent,
      MemberCardComponent,
      MemberDetailComponent,
      MemberEditComponent,
      PhotoEditorComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
      BsDropdownModule.forRoot(),
      BsDatepickerModule.forRoot(),
      PaginationModule.forRoot(),
      TabsModule.forRoot(),
      ButtonsModule.forRoot(),
      RouterModule.forRoot(appRoutes),
      TimeagoModule.forRoot(),
      NgxGalleryModule,
      FileUploadModule,
      JwtModule.forRoot({
        config: {
          tokenGetter,
          whitelistedDomains: ['localhost:5000'],
          blacklistedRoutes: ['http://localhost:5000/api/auth',
                             'http://localhost:5000/api/auth/register']
        }
      })
   ],
   providers: [
      AuthService,
      ErrorInterceptorProvider,
      UserService,
      AuthGuard,
      MemberDetailResolver,
      MemberListResolver,
      MemberEditResolver,
      PreventUnsavedChanges,
      ListsResolver
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
