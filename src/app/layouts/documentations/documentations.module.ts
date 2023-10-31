import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentationsComponent } from './documentations.component';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';

const route: Routes = [
  {
    path: '',
    component: DocumentationsComponent,
    children: [
      {
        path: 'buttons',
        loadChildren: () => import('../../pages/button-doc/button-doc.module').then(m => m.ButtonDocModule)
      },
      {
        path: 'forms',
        loadChildren: () => import('../../pages/form-doc/form-doc.module').then(m => m.FormDocModule)
      },
    ]
  }
]

@NgModule({
  declarations: [
    DocumentationsComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(route)
  ]
})
export class DocumentationsModule { }
