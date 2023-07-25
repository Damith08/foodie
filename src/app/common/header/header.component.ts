import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private router: Router) {}
  @Output() sidenav: EventEmitter<any> = new EventEmitter();
  showFiller = false;

  toggle() {
    this.sidenav.emit();
  }

  onLoadLogin() {
    this.router.navigate(['/login']);
  }
}
