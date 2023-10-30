import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { TopBarComponent } from './app-bars/top-bar/top-bar.component';
import { TopBarDirective } from './app-bars/top-bar/top-bar.directive';
import { MainComponent } from './main/main.component';



@NgModule({
  declarations: [
    ButtonComponent,
    TopBarComponent,
    TopBarDirective,
    MainComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    TopBarComponent,
    TopBarDirective,
    MainComponent
  ]
})
export class ComponentsModule { }
