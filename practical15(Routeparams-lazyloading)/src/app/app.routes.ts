import { Routes } from '@angular/router';
import { UserComponent } from './user/user';

export const routes: Routes = [
  { path: 'user/:id', component: UserComponent }
];