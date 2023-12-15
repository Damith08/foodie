import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() sidenav: EventEmitter<any> = new EventEmitter();

  showFiller = false;

  constructor(private router: Router) {}

  get isMenuPage(): boolean {
    return this.router.url === '/menu';
  }

  get isHomePage(): boolean {
    return this.router.url === '/';
  }

  toggle() {
    this.sidenav.emit();
  }

  onLoadLogin() {
    this.router.navigate(['/auth/login']);
  }
}
