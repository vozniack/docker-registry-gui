import {Component, Input} from '@angular/core';
import {fadeInAnimation} from '../../animations/fadeInAnimation';

@Component({
  selector: 'app-snippet',
  templateUrl: './snippet.component.html',
  styleUrls: ['./snippet.component.scss'],
  animations: [fadeInAnimation]
})
export class SnippetComponent {

  @Input()
  text: string = undefined;

  copyToClipboard(): void {
    const tmp = document.createElement('textarea');

    tmp.style.position = 'fixed';
    tmp.style.opacity = '0';

    tmp.value = this.text;

    document.body.appendChild(tmp);

    tmp.focus();
    tmp.select();

    document.execCommand('copy');
    document.body.removeChild(tmp);
  }
}
