import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { FooterComponent } from './footer/footer.component';
//import { HeaderComponent } from './header/header.component';
//import { HomeComponent } from './home/home.component';
import { BeachComponent } from './beach/beach.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { WeatherComponent } from './weather/weather.component';
import { EventComponent } from './event/event.component';
import { BookingComponent } from './booking/booking.component';
import { ActivitiesComponent } from './activities/activities.component';
import { OthersComponent } from './others/others.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BackgroundComponent } from './background/background.component';
import { EatComponent } from './eat/eat.component';
import { ProductComponent } from './product/product.component';
import { StayComponent } from './stay/stay.component';
import { VenuesComponent } from './venues/venues.component';
import { VisitComponent } from './visit/visit.component';
import { HealthComponent } from './health/health.component';
import { HikingComponent } from './hiking/hiking.component';
import { RiverComponent } from './river/river.component';
import { NatureComponent } from './nature/nature.component';
import { MoseumComponent } from './moseum/moseum.component';
import { Visit1Component } from './visit1/visit1.component';
import { WhaleComponent } from './whale/whale.component';
import { TiklingComponent } from './tikling/tikling.component';
import { PaguriranComponent } from './paguriran/paguriran.component';
import { BaybayComponent } from './baybay/baybay.component';
import { MalawmawanComponent } from './malawmawan/malawmawan.component';

const routes: Routes = [
  {path:'', redirectTo:'sign-in', pathMatch:'full'},
  {path:'sign-in', component:SignInComponent},
  {path:'health', component:HealthComponent},
  {path:'weather', component:WeatherComponent},
  {path:'event', component:EventComponent},
  {path:'booking', component:BookingComponent},
  {path:'activities', component:ActivitiesComponent},
  {path:'others', component:OthersComponent},
  {path:'sign-up', component:SignUpComponent},
  {path:'beach', component:BeachComponent},
  {path:'background', component:BackgroundComponent},
  {path:'eat', component:EatComponent},
  {path:'product', component:ProductComponent},
  {path:'stay', component:StayComponent},
  {path:'venues', component:VenuesComponent},
  {path:'visit', component:VisitComponent},
  {path:'hiking', component:HikingComponent},
  {path:'river', component:RiverComponent},
  {path:'nature', component:NatureComponent},
  {path:'moseum', component:MoseumComponent},
  {path:'visit1', component:Visit1Component},
  {path:'whale', component:WhaleComponent},
  {path:'tikling', component:TiklingComponent},
  {path:'paguriran', component:PaguriranComponent},
  {path:'malawmawan', component:MalawmawanComponent},
  {path:'baybay', component:BaybayComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
