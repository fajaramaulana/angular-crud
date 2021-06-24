import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBensinComponent } from './components/add-bensin/add-bensin.component';
import { BensinDetailsComponent } from './components/bensin-details/bensin-details.component';
import { BensinListComponent } from './components/bensin-list/bensin-list.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'bensins',
    pathMatch: 'full'
  },{
    path: 'bensins',
    component: BensinListComponent
  },
  {
    path: 'bensins/:id',
    component: BensinDetailsComponent
  },
  {
    path: 'add',
    component: AddBensinComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
