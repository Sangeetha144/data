import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from 'src/material.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
 
// components
import { RegistrationComponent } from './registration/registration.component';
import { AppComponent } from './app.component';
import { IntelligenceComponent } from './intelligence/intelligence.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { TableComponent } from './table/table.component';
import { ButtonComponent } from './button/button.component';
import { HeaderComponent } from './header/header.component';
import { TileComponent } from './tile/tile.component';
import { UserActivityComponent } from './user-activity/user-activity.component';
import { BackComponent } from './back/back.component';
import { SupportComponent } from './support/support.component';

 
@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    IntelligenceComponent,
    PieChartComponent,
    LoginComponent,
    LandingComponent,
    LineChartComponent,
  
    TableComponent,
    ButtonComponent,
    HeaderComponent,
    TileComponent,
    UserActivityComponent,
    BackComponent,
    SupportComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgApexchartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 
