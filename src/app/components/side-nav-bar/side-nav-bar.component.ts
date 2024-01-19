import { Component } from '@angular/core';

@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.scss'],
})
export class SideNavBarComponent {
  languages = [
    { value: 'english', name: 'English' },
    { value: 'tamil', name: 'Tamil' },
    { value: 'arabic', name: 'Arabic' },
  ];
  // defaultCountry: string = 'united-kingdom';
  countries = [
    { value: 'united-kingdom', name: 'United Kingdom' },
    { value: 'australia', name: 'Australia' },
    { value: 'belgium', name: 'Belgium' },
    { value: 'france', name: 'France' },
    { value: 'germany', name: 'Germany' },
    { value: 'ireland', name: 'Ireland' },
    { value: 'italy', name: 'Italy' },
    { value: 'kuwait', name: 'Kuwait' },
    { value: 'nether lands', name: 'Nether lands' },
    { value: 'qatar', name: 'Qatar' },
    { value: 'singapore', name: 'Singapore' },
    { value: 'taiwan', name: 'Taiwan' },
    { value: 'united arab amirates', name: 'United Arab Emirates' },
  ];
  sidenav: any;

  openSideBar(sidebarOpen: boolean) {}

  toggle() {
    this.sidenav.emit();
  }
}
