import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { FooterComponent } from './footer/footer.component';
//import { HeaderComponent } from './header/header.component';
//import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { WeatherComponent } from './weather/weather.component';
import { EventComponent } from './event/event.component';
import { BookingComponent } from './booking/booking.component';
import { ActivitiesComponent } from './activities/activities.component';
import { OthersComponent } from './others/others.component';
import { SignUpComponent } from './sign-up/sign-up.component';
//import { BackgroundComponent } from './background/background.component';
import { EatComponent } from './eat/eat.component';
import { ProductComponent } from './product/product.component';
import { StayComponent } from './stay/stay.component';
import { VenuesComponent } from './venues/venues.component';
import { VisitComponent } from './visit/visit.component';

const routes: Routes = [{
    path: 'sign-in',
    redirectTo: '/sign-in',
    pathMatch: 'full',},
  {path:'weather', component:WeatherComponent},
  {path:'event', component:EventComponent},
  {path:'booking', component:BookingComponent},
  {path:'activities', component:ActivitiesComponent},
  {path:'others', component:OthersComponent},
  {path:'sign-up', component:SignUpComponent},
  {path:'sign-in', component:SignInComponent},
  //{path:'background', component:BackgroundComponent},
  {path:'eat', component:EatComponent},
  {path:'product', component:ProductComponent},
  {path:'stay', component:StayComponent},
  {path:'venues', component:VenuesComponent},
  {path:'visit', component:VisitComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
