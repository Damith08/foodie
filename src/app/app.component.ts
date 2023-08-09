import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  defaultCountry = 'united kingdom';

  @Output() close = new EventEmitter<void>();

  userLogin() {
    throw new Error('Method not implemented.');
  }
  title = 'deliveroo-clone';
  showFiller = false;
  sidenav: any;

  openSideBar(sidebarOpen: boolean) {}

  onClose() {
    this.close.emit();
  }
}
