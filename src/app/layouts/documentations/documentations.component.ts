import { Component } from '@angular/core';
import { TopBarModel } from 'src/app/components/app-bars/top-bar/top-bar.enum';
import { MainModel } from 'src/app/components/main/main.enum';
import { NavDrawerModel } from 'src/app/components/navigation/nav-drawer/nav-drawer.enum';
import { NavItemModel } from 'src/app/components/navigation/nav-item/nav-item.enum';
import { NavItemType, navItem } from './documentations.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'gks-documentations',
  templateUrl: './documentations.component.html',
  styleUrls: ['./documentations.component.css']
})
export class DocumentationsComponent {
  sideMenu: boolean = false;

  largeModelMain = MainModel.small;
  modelTopBar: string = TopBarModel.center;
  modelNavDrawer: string = NavDrawerModel.modal;
  modelNavDrawerItem: string = NavItemModel.navdrawer;
  navItem: NavItemType[] = navItem

  constructor(
    private router: Router
  ) { }

  menuAction() {
    this.sideMenu = !this.sideMenu
  }

  gotoPage(ev: any) {
    navItem.forEach(item => {
      item.active = false;
    });
    this.navItem[ev].active = true;
    this.router.navigate([this.navItem[ev].link])
  }
}
