import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Register } from './pages/register/register';
import { Events } from './pages/events/events';
import { Dashboard } from './pages/dashboard/dashboard';
import { RegisterEvent } from './pages/register-event/register-event';
import { ProjectSubmissions } from './pages/project-submissions/project-submissions';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: Home,
  },
  {
    path: 'register',
    component: Register,
  },
  {
    path: 'events',
    component: Events,
  },
  {
    path: 'dashboard',
    component: Dashboard,
  },
  {
    path: 'project-registration/:id',
    component: RegisterEvent,
  },
  {
    path: 'submissions/:id',
    component: ProjectSubmissions,
  },
];
