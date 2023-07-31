import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  userLogin() {
    throw new Error('Method not implemented.');
  }
  title = 'deliveroo-clone';
  showFiller = false;
  sidenav: any;

  openSideBar(sidebarOpen: boolean) {}
}
