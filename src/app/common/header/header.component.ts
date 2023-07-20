import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() sidebar = new EventEmitter<boolean>();
  showFiller = false;

  sideBarOpen(value: boolean) {
    this.sidebar.emit(value);
  }
}
