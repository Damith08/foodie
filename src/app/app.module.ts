import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './common/footer/footer.component';
import { HeaderComponent } from './common/header/header.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

import { MenuPageComponent } from './pages/menu-page/menu-page.component';

import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { SideNavBarComponent } from './common/side-nav-bar/side-nav-bar.component';
import { RestaurantMenuComponent } from './pages/menu-page/restaurant-menu/restaurant-menu.component';
import { BasketComponent } from './pages/menu-page/basket/basket.component';
import { DishCategoryBarComponent } from './pages/menu-page/dish-category-bar/dish-category-bar.component';
import { FirstListComponent } from './pages/menu-page/dish-category-bar/first-list/first-list.component';
import { PremiumEditionSetComponent } from './pages/menu-page/dish-category-bar/premium-edition-set/premium-edition-set.component';
import { TopSellingSingleSetMealComponent } from './pages/menu-page/dish-category-bar/top-selling-single-set-meal/top-selling-single-set-meal.component';
import { DoubleDelightMealComponent } from './pages/menu-page/dish-category-bar/double-delight-meal/double-delight-meal.component';
import { MixMatchComboBundlesComponent } from './pages/menu-page/dish-category-bar/mix-match-combo-bundles/mix-match-combo-bundles.component';
import { UltimateSeabassIsHereComponent } from './pages/menu-page/dish-category-bar/ultimate-seabass-is-here/ultimate-seabass-is-here.component';
import { BentoSeriesComponent } from './pages/menu-page/dish-category-bar/bento-series/bento-series.component';
import { NoodlesComponent } from './pages/menu-page/dish-category-bar/noodles/noodles.component';
import { PorridgeComponent } from './pages/menu-page/dish-category-bar/porridge/porridge.component';
import { FriedRiceClaypotRiceComponent } from './pages/menu-page/dish-category-bar/fried-rice-claypot-rice/fried-rice-claypot-rice.component';
import { MeatComponent } from './pages/menu-page/dish-category-bar/meat/meat.component';
import { HandmadeBeancurdComponent } from './pages/menu-page/dish-category-bar/handmade-beancurd/handmade-beancurd.component';
import { VegetablesComponent } from './pages/menu-page/dish-category-bar/vegetables/vegetables.component';
import { DrinksComponent } from './pages/menu-page/dish-category-bar/drinks/drinks.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomePageComponent,

    MenuPageComponent,
    SideNavBarComponent,
    RestaurantMenuComponent,
    BasketComponent,
    DishCategoryBarComponent,
    FirstListComponent,
    PremiumEditionSetComponent,
    TopSellingSingleSetMealComponent,
    DoubleDelightMealComponent,
    MixMatchComboBundlesComponent,
    UltimateSeabassIsHereComponent,
    BentoSeriesComponent,
    NoodlesComponent,
    PorridgeComponent,
    FriedRiceClaypotRiceComponent,
    MeatComponent,
    HandmadeBeancurdComponent,
    VegetablesComponent,
    DrinksComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatInputModule,
    MatFormFieldModule,
    MatMenuModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    FormsModule,
    MatSelectModule,
    NgFor,
    MatCardModule,
    ReactiveFormsModule,
    NgIf,
  ],
  providers: [MatIconRegistry],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(public matIconRegistry: MatIconRegistry) {
    matIconRegistry.registerFontClassAlias('font-awesome', 'fa');
  }
}
