import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { LandingComponent } from './landing/landing.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { ButtonComponent } from './button/button.component';
import { RegistrationComponent } from './registration/registration.component';
import { IntelligenceComponent } from './intelligence/intelligence.component';
import { TileComponent } from './tile/tile.component';
import { UserActivityComponent } from './user-activity/user-activity.component';


const routes: Routes = [
  {
    path : '',
    component : ButtonComponent
  },
 
  {
    path : 'landing',
    component : LandingComponent
  },
  {
    path : 'line-chart',
     component : LineChartComponent
   },
   {
    path:'login',
    component:LoginComponent
   },
   {
    path:'register',
    component:RegistrationComponent
   },
   {
    path:'intelligence',
    component:IntelligenceComponent 
   },
   {
    path:'tile',
    component:TileComponent
   },
   {
    path:'user-activity',
    component:UserActivityComponent
   },
 {
  path:'fabric',
  loadChildren:()=> import('./modules/fabric/fabric.module').then(x=>x.FabricModule)
 }

   
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
