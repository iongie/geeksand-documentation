import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'gks-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TopBarComponent {
  @Input() model: string = '';
}
