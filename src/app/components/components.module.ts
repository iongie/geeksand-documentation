import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { TopBarComponent } from './app-bars/top-bar/top-bar.component';
import { TopBarDirective } from './app-bars/top-bar/top-bar.directive';



@NgModule({
  declarations: [
    ButtonComponent,
    TopBarComponent,
    TopBarDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    TopBarComponent,
    TopBarDirective
  ]
})
export class ComponentsModule { }
