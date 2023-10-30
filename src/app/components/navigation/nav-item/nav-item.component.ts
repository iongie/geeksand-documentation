import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'gks-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavItemComponent {
  @Input() model: string = '';;
  @Input() itemIndicator: boolean = false
}
