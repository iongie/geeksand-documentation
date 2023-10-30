import { Component } from '@angular/core';
import { TopBarModel } from 'src/app/components/app-bars/top-bar/top-bar.enum';
import { MainModel } from 'src/app/components/main/main.enum';
import { NavDrawerModel } from 'src/app/components/navigation/nav-drawer/nav-drawer.enum';
import { NavItemModel } from 'src/app/components/navigation/nav-item/nav-item.enum';

@Component({
  selector: 'gks-documentations',
  templateUrl: './documentations.component.html',
  styleUrls: ['./documentations.component.css']
})
export class DocumentationsComponent {
  sideMenu: boolean = false;

  largeModelMain = MainModel.large
  modelTopBar: string = TopBarModel.center;
  modelNavDrawer: string = NavDrawerModel.modal;
  modelNavDrawerItem: string = NavItemModel.navdrawer;

  menuAction(){
    this.sideMenu = !this.sideMenu  
  }
}
