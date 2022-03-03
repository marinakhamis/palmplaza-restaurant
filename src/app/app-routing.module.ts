import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BeverageComponent } from './beverage/beverage.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { BreakfastComponent } from './breakfast/breakfast.component';
import { CartNewComponent } from './cart-new/cart-new.component';
import { DessertsComponent } from './desserts/desserts.component';
import { DinnerComponent } from './dinner/dinner.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LunchComponent } from './lunch/lunch.component';
import { MenuPageComponent } from './menu-page/menu-page.component';


const routes: Routes =
  [
    // { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '', component: HomePageComponent },
    { path: "cart", component: CartNewComponent },
    { path: "aboutus", component: BookingFormComponent },
    {
      path: 'menu', component: MenuPageComponent,
      children: [
        {
          path: "breakfast", component: BreakfastComponent
        },
        {
          path: "lunch", component: LunchComponent
        },
        {
          path: "dinner", component: DinnerComponent
        },
        {
          path: "desserts", component: DessertsComponent
        },
        {
          path: "beverage", component: BeverageComponent
        }

      ]
    },

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
