import { Component, Input } from '@angular/core';

@Component({
  selector: 'gks-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() type: string | null = null;
  @Input() model: string | null = null;
  @Input() disabled: boolean = false;
}
