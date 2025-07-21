import { Routes } from '@angular/router';
import { Shell } from './shell/shell';

export const routes: Routes = [
    {
        path: '',
        component: Shell,
        title: 'Home',
         loadChildren: () => import('./shell/shell.routes')
      .then(m => m.ShellRoutes)
    },
];
