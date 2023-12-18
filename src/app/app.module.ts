import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

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
import { SideNavBarComponent } from './components/side-nav-bar/side-nav-bar.component';

import { FirstListComponent } from './feature/menu/pages/menu-page/dish-category-bar/first-list/first-list.component';
import { PremiumEditionSetComponent } from './feature/menu/pages/menu-page/dish-category-bar/premium-edition-set/premium-edition-set.component';
import { TopSellingSingleSetMealComponent } from './feature/menu/pages/menu-page/dish-category-bar/top-selling-single-set-meal/top-selling-single-set-meal.component';
import { DoubleDelightMealComponent } from './feature/menu/pages/menu-page/dish-category-bar/double-delight-meal/double-delight-meal.component';
import { MixMatchComboBundlesComponent } from './feature/menu/pages/menu-page/dish-category-bar/mix-match-combo-bundles/mix-match-combo-bundles.component';
import { UltimateSeabassIsHereComponent } from './feature/menu/pages/menu-page/dish-category-bar/ultimate-seabass-is-here/ultimate-seabass-is-here.component';

import { NoodlesComponent } from './feature/menu/pages/menu-page/dish-category-bar/noodles/noodles.component';
import { PorridgeComponent } from './feature/menu/pages/menu-page/dish-category-bar/porridge/porridge.component';
import { FriedRiceClaypotRiceComponent } from './feature/menu/pages/menu-page/dish-category-bar/fried-rice-claypot-rice/fried-rice-claypot-rice.component';
import { MeatComponent } from './feature/menu/pages/menu-page/dish-category-bar/meat/meat.component';
import { HandmadeBeancurdComponent } from './feature/menu/pages/menu-page/dish-category-bar/handmade-beancurd/handmade-beancurd.component';
import { VegetablesComponent } from './feature/menu/pages/menu-page/dish-category-bar/vegetables/vegetables.component';
import { DrinksComponent } from './feature/menu/pages/menu-page/dish-category-bar/drinks/drinks.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomePageComponent,

    SideNavBarComponent,

    FirstListComponent,
    PremiumEditionSetComponent,
    TopSellingSingleSetMealComponent,
    DoubleDelightMealComponent,
    MixMatchComboBundlesComponent,
    UltimateSeabassIsHereComponent,
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
