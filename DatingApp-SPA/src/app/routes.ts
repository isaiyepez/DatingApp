import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { AuthGuard } from './guards/auth.guard';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  {
    path: '',
    runGuardsAndResolvers: 'always',
    children: [
       // canActivate is used in case you want to guard a single route.
      { path: 'members', component: MemberListComponent, /* canActivate: [AuthGuard] */ },
      { path: 'messages', component: MessagesComponent},
      { path: 'lists', component: ListsComponent}
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full'}
];
