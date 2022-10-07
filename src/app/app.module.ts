import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { NgxMaskModule, IConfig } from 'ngx-mask';
import {VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';


import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { NgOtpInputModule } from 'ng-otp-input';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { BackgroundComponent } from './background/background.component';
import { ActivitiesComponent } from './activities/activities.component';
import { OthersComponent } from './others/others.component';
import { EventComponent } from './event/event.component';
import { BookingComponent } from './booking/booking.component';
import { EatComponent } from './eat/eat.component';
import { ProductComponent } from './product/product.component';
import { StayComponent } from './stay/stay.component';
import { VenuesComponent } from './venues/venues.component';
import { VisitComponent } from './visit/visit.component';
import { WeatherComponent } from './weather/weather.component';
import { BghomeComponent } from './bghome/bghome.component';
import { SignUpComponent } from './sign-up/sign-up.component';
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
import { Visit2Component } from './visit2/visit2.component';
import { PulogComponent } from './pulog/pulog.component';
import { Visit3Component } from './visit3/visit3.component';
import { Visit4Component } from './visit4/visit4.component';
import { BulusanComponent } from './bulusan/bulusan.component';
import { RompeComponent } from './rompe/rompe.component';
import { TalkComponent } from './talk/talk.component';
import { TransportComponent } from './transport/transport.component';
import { GoingtoComponent } from './goingto/goingto.component';
import { CalendarComponent } from './calendar/calendar.component';
import { GallaryComponent } from './gallary/gallary.component';
import { VideosComponent } from './videos/videos.component';
import { TermsComponent } from './terms/terms.component';
import { CreditsComponent } from './credits/credits.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { Help1Component } from './help1/help1.component';
import { SettingsComponent } from './settings/settings.component';
import { BeachComponent } from './beach/beach.component';
import { PhoneComponent } from './phone/phone.component';
import { Weather2Component } from './weather2/weather2.component';
import { LoadingComponent } from './loading/loading.component';
import { LoadingInterceptor } from './shared/loading.interceptor';

//import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { provideAuth,getAuth } from '@angular/fire/auth';
//import { provideFirestore,getFirestore } from '@angular/fire/firestore';
const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    BeachComponent,
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SignInComponent,
    BackgroundComponent,
    ActivitiesComponent,
    OthersComponent,
    EventComponent,
    BookingComponent,
    EatComponent,
    ProductComponent,
    StayComponent,
    VenuesComponent,
    VisitComponent,
    WeatherComponent,
    BghomeComponent,
    SignUpComponent,
    HealthComponent,
    HikingComponent,
    RiverComponent,
    NatureComponent,
    MoseumComponent,
    Visit1Component,
    WhaleComponent,
    TiklingComponent,
    PaguriranComponent,
    BaybayComponent,
    MalawmawanComponent,
    Visit2Component,
    PulogComponent,
    Visit3Component,
    Visit4Component,
    BulusanComponent,
    RompeComponent,
    TalkComponent,
    TransportComponent,
    GoingtoComponent,
    CalendarComponent,
    GallaryComponent,
    VideosComponent,
    TermsComponent,
    CreditsComponent,
    PrivacyComponent,
    ContactComponent,
    AboutComponent,
    Help1Component,
    SettingsComponent,
    PhoneComponent,
    Weather2Component,
    LoadingComponent,
  ],

  imports: [
    VgControlsModule,
    VgBufferingModule,
    VgOverlayPlayModule,
    VgCoreModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgOtpInputModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    NgxMaskModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:LoadingInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
