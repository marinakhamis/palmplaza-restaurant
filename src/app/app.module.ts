import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { TeamComponent } from './team/team.component';
import { HostListener } from '@angular/core';
import { ReserveComponent } from './reserve/reserve.component';
import { EventEmitter } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BeverageComponent } from './beverage/beverage.component';
import { BreakfastComponent } from './breakfast/breakfast.component';
import { CartNewComponent } from './cart-new/cart-new.component';
import { CategoryIconsComponent } from './category-icons/category-icons.component';
import { DessertsComponent } from './desserts/desserts.component';
import { DinnerComponent } from './dinner/dinner.component';
import { ImageComponent } from './image/image.component';
import { LunchComponent } from './lunch/lunch.component';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { FormsModule } from '@angular/forms';







@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    AboutUsComponent,
    GalleryComponent,
    TeamComponent,
    ReserveComponent,
    ImageComponent,
    CategoryIconsComponent,
    BreakfastComponent,
    LunchComponent,
    DinnerComponent,
    DessertsComponent,
    BeverageComponent,
    CartNewComponent,
    MenuPageComponent,
    HomePageComponent,
    HeaderComponent,
    NavBarComponent,
    BookingFormComponent,
  ],

  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot([]),
    NgImageSliderModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
