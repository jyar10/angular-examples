import { Routes } from '@angular/router';
import { Home } from '../components/home/home';
import { Dashboard } from '../components/dashboard/dashboard';
import { Contact } from '../components/contact/contact';

export const ShellRoutes: Routes = [
    {
        path: '',
        component: Home,
        title: 'Home'
    },
     {
        path: 'dashboard',
        component: Dashboard,
        title: 'Dashboard'
    },
    {
        path: 'contact',
        component: Contact,
        title: 'Contact'
    },
];
