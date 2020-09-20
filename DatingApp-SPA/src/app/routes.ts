import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { MemberDetailResolver } from './resolvers/member-detail.resolver';
import { MemberListResolver } from './resolvers/member-list.resolver';
import { MemberEditResolver } from './resolvers/member-edit.resolver';
import { PreventUnsavedChanges } from './guards/prevent-unsaved-changes.guard';
import { AuthGuard } from './guards/auth.guard';
import { ListsResolver } from './resolvers/lists.resolver';
import { MessagesResolver } from './resolvers/messages.resolver';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
       // canActivate is used in case you want to guard a single route.
      { path: 'members', component: MemberListComponent,
        resolve: {users: MemberListResolver}/* canActivate: [AuthGuard] */},
      { path: 'members/:id', component: MemberDetailComponent, resolve: {user: MemberDetailResolver}},
      { path: 'member/edit', component: MemberEditComponent,
            resolve: {user: MemberEditResolver}, canDeactivate: [PreventUnsavedChanges]},
      { path: 'messages', component: MessagesComponent, resolve: {messages: MessagesResolver}},
      { path: 'lists', component: ListsComponent, resolve: {users: ListsResolver}}
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full'}
];
