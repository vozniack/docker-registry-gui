import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent {

  @Input()
  placeholder = undefined;

  @Input()
  width = 128;

  @Input()
  icon = undefined;

  @Output()
  output = new EventEmitter<string>();

  model: string;

  emit(change: string): void {
    this.output.emit(change);
  }
}
