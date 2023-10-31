import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'gks-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class InputComponent {
  @Input() placeholder: string = '';
  @Input() name: string = '';
  @Input() model: string = '';
  @Input() label: string = '';
  @Input() formControlName: string = '';
  @Input() id: string = '';
  @Input() fill: string = '';
}
