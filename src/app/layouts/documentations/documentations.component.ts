import { Component } from '@angular/core';
import { TopBarModel } from 'src/app/components/app-bars/top-bar/top-bar.enum';
import { MainModel } from 'src/app/components/main/main.enum';

@Component({
  selector: 'gks-documentations',
  templateUrl: './documentations.component.html',
  styleUrls: ['./documentations.component.css']
})
export class DocumentationsComponent {
  largeModelMain = MainModel.large
  modelTopBar: string = TopBarModel.center;
}
