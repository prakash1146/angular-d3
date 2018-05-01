import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgGridModule} from "ag-grid-angular/main";
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartComponent } from './chart/chart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { D3GraphComponent } from './d3-graph/d3-graph.component';
import { D3Service } from 'd3-ng2-service';
import { ChartModule } from 'angular2-highcharts';
import { HighchartComponent } from './highchart/highchart.component';
import { DataGridComponent } from './data-grid/data-grid.component';

const  appRoutes : Routes = [
  {path :'', component: LoginComponent},
  {path :'dashBoard', component: DashboardComponent,children:[
    {path :'', redirectTo:'home',pathMatch:'full'},
    {path :'home', component: HomeComponent},
    {path :'d3Chart', component: ChartComponent},
    {path :'highChart', component: HighchartComponent}]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent,
    ChartComponent,
    PageNotFoundComponent,
    D3GraphComponent,
    HighchartComponent,
    DataGridComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ChartModule.forRoot(require('highcharts')),
    AgGridModule.withComponents(
      []
  )
  ],
  providers: [D3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
