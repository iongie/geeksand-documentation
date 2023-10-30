import { Component, Input, ViewEncapsulation } from '@angular/core';
import { NavDrawerAnimation } from './nav-drawer.animation';

@Component({
  selector: 'gks-nav-drawer',
  templateUrl: './nav-drawer.component.html',
  styleUrls: ['./nav-drawer.component.css'],
  animations: [NavDrawerAnimation],
  encapsulation: ViewEncapsulation.None
})
export class NavDrawerComponent {
  @Input() model: string = ''
}
