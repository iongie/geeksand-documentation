import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { TopBarComponent } from './app-bars/top-bar/top-bar.component';
import { TopBarDirective } from './app-bars/top-bar/top-bar.directive';
import { MainComponent } from './main/main.component';
import { NavDrawerComponent } from './navigation/nav-drawer/nav-drawer.component';



@NgModule({
  declarations: [
    ButtonComponent,
    TopBarComponent,
    TopBarDirective,
    MainComponent,
    NavDrawerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    TopBarComponent,
    TopBarDirective,
    MainComponent,
    NavDrawerComponent
  ]
})
export class ComponentsModule { }
