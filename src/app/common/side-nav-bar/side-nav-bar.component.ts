import { Component } from '@angular/core';

@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.scss'],
})
export class SideNavBarComponent {
  defaultCountry = 'united kingdom';
  sidenav: any;

  openSideBar(sidebarOpen: boolean) {}

  toggle() {
    this.sidenav.emit();
  }
}
