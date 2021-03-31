
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PagesRoutingModule } from './pages-routing.module';
import { MatsModule } from '../../shared/modules/mats.module';
import { FormsModule } from '@angular/forms';
import { Version1Component } from './comingsoon/version1/version1.component';
import { Version2Component } from './comingsoon/version2/version2.component';
import { Version3Component } from './comingsoon/version3/version3.component';
import { Version4Component } from './comingsoon/version4/version4.component';
import { Version5Component } from './comingsoon/version5/version5.component';
import { Version6Component } from './comingsoon/version6/version6.component';
import { DemoComponent } from './comingsoon/demo/demo.component';
import { Counter } from './comingsoon/counter.service';


@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    PagesRoutingModule,
    MatsModule,
    
    FormsModule
  ],
  declarations: [ 
     DemoComponent,
      Version1Component,
     
      Version2Component,
     
      Version3Component,
     
      Version4Component,
     
      Version5Component,
     
      Version6Component],
  providers: [Counter],
})
export class PagesModule { }
