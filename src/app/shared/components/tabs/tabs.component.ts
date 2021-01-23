import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Tab} from './tab';
import {Action} from './action';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {

  @Input()
  tabs: Tab[];

  @Input()
  actions: Action[];

  @Output()
  active = new EventEmitter<string>();

  activate(activeTab: Tab): void {
    this.tabs.forEach(tab => {
      tab.active = false;
    });

    activeTab.active = true;

    this.active.emit(activeTab.code);
  }
}
