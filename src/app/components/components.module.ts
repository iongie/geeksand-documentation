import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { TopBarComponent } from './app-bars/top-bar/top-bar.component';
import { TopBarDirective } from './app-bars/top-bar/top-bar.directive';
import { MainComponent } from './main/main.component';
import { NavDrawerComponent } from './navigation/nav-drawer/nav-drawer.component';
import { BackdropComponent } from './backdrop/backdrop.component';
import { NavItemComponent } from './navigation/nav-item/nav-item.component';
import { InputComponent } from './forms/input/input.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ButtonComponent,
    TopBarComponent,
    TopBarDirective,
    MainComponent,
    NavDrawerComponent,
    BackdropComponent,
    NavItemComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ButtonComponent,
    TopBarComponent,
    TopBarDirective,
    MainComponent,
    NavDrawerComponent,
    BackdropComponent,
    NavItemComponent,
    InputComponent
  ]
})
export class ComponentsModule { }
