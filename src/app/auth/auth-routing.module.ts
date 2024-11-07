import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layoutPage/layoutPage.component';

const routes: Routes = [
  {
    path: '',
    component:LayoutPageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],

})
export class AuthRoutingModule { }
