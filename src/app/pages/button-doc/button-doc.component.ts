import { Component } from '@angular/core';
import { ButtonModel } from 'src/app/components/button/button.enum';

@Component({
  selector: 'gks-button-doc',
  templateUrl: './button-doc.component.html',
  styleUrls: ['./button-doc.component.css']
})
export class ButtonDocComponent {
  outlinedButton: string = ButtonModel.outlined;
  filledButton: string = ButtonModel.filled;
  button: string = ButtonModel.none;
  elevatedButton: string = ButtonModel.elevated;
  fab: string = ButtonModel.fab;
  fabExtended: string = ButtonModel.fabExtended;
  iconFilled: string = ButtonModel.iconFilled;
  iconOutlined: string = ButtonModel.iconOutlined;
}
