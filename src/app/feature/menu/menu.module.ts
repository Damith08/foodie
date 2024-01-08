import { NgModule } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { RestaurantInfoComponent } from './components/restaurant-info/restaurant-info.component';
import { MenuPageComponent } from './pages/menu-page/menu-page.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DishCategoryBarComponent } from './components/dish-category-bar/dish-category-bar.component';
import { BasketComponent } from './components/basket/basket.component';
import { DishCategorySectionComponent } from './components/dish-category-section/dish-category-section.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { DishCardComponent } from './components/dish-card/dish-card.component';
import { DishListComponent } from './components/dish-list/dish-List.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeadersInterceptor } from './headers.interceptor';

@NgModule({
  declarations: [
    MenuPageComponent,
    RestaurantInfoComponent,
    DishCategoryBarComponent,
    DishCategorySectionComponent,
    BasketComponent,
    DishCardComponent,
    DishListComponent,
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    NgFor,
    MatCardModule,
    NgIf,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HeadersInterceptor, multi: true },
  ],
})
export class MenuModule {}
