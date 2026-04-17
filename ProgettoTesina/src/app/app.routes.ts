import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login';
import { RegisterComponent } from './components/register/register';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard';
import { UsersListComponent } from './components/users-list/users-list';
import { NotesManagementComponent } from './components/notes-management/notes-management';

export const routes: Routes = [
   { path: '', redirectTo: '/login', pathMatch: 'full' },
   { path: 'login', component: LoginComponent },
   { path: 'register', component: RegisterComponent },
   { path: 'forgot-password', component: ForgotPasswordComponent },
   { path: 'admin', component: AdminDashboardComponent },
   { path: 'users-list', component: UsersListComponent },
   { path: 'notes-management', component: NotesManagementComponent },
];
