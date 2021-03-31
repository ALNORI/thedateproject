
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Version1Component } from './comingsoon/version1/version1.component';
import { Version2Component } from './comingsoon/version2/version2.component';
import { Version3Component } from './comingsoon/version3/version3.component';
import { Version4Component } from './comingsoon/version4/version4.component';
import { Version5Component } from './comingsoon/version5/version5.component';
import { Version6Component } from './comingsoon/version6/version6.component';
import { DemoComponent } from './comingsoon/demo/demo.component';

const routes: Routes = [
  {
    path: "demos",
    component: DemoComponent
  },
  

  {
    path: "comingsoon/version1",
    component: Version1Component
  },

  {
    path: "comingsoon/version2",
    component: Version2Component
  },


 
  {
    path: "comingsoon/version3",
    component: Version3Component
  },

  {
    path: "comingsoon/version4",
    component: Version4Component,
  },
  {
    path: "comingsoon/version5",
    component: Version5Component,
  },
  {
    path: "comingsoon/version6",
    component: Version6Component,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
