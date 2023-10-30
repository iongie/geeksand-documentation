import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonDocComponent } from './button-doc.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { Routes, RouterModule } from '@angular/router';

const route: Routes = [
  {
    path: '',
    component: ButtonDocComponent
  }
]

@NgModule({
  declarations: [
    ButtonDocComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(route)
  ]
})
export class ButtonDocModule { }
