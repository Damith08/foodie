import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() sidenav: EventEmitter<any> = new EventEmitter();
  showFiller = false;

  toggle() {
    this.sidenav.emit();
  }
}
