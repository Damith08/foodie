import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isLoginPage: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {}
  @Output() sidenav: EventEmitter<any> = new EventEmitter();
  showFiller = false;

  ngOnInit(): void {
    // Check if the current route is the login page
    this.route.url.subscribe((url) => {
      this.isLoginPage = url.join('/') === 'login';
    });
  }

  toggle() {
    this.sidenav.emit();
  }

  onLoadLogin() {
    this.router.navigate(['/login']);
  }
}
