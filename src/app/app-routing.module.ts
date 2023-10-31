import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'documentations/forms',
    pathMatch: 'full'
  },
  {
    path:'documentations',
    loadChildren: () => import('./layouts/documentations/documentations.module').then(m => m.DocumentationsModule)
  },
  {
    path:'**',
    loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
