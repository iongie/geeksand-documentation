import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'documentations/buttons',
    pathMatch: 'full'
  },
  {
    path:'documentations',
    loadChildren: () => import('./layouts/documentations/documentations.module').then(m => m.DocumentationsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
