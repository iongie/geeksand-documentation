import { Component, Input } from '@angular/core';

@Component({
  selector: 'gks-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  @Input() model: string = '';
}
