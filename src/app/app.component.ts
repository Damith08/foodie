import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {}
  defaultCountry = 'united kingdom';

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.isHomeRoute();
      });
  }

  userLogin() {
    throw new Error('Method not implemented.');
  }
  title = 'foodie-web';
  showFiller = false;
  sidenav: any;

  openSideBar(sidebarOpen: boolean) {}

  // onClose() {
  //   this.close.emit();
  // }

  isHomeRoute(): boolean {
    return this.router.url === '/';
  }
}
