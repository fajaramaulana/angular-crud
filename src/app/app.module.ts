import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBensinComponent } from './components/add-bensin/add-bensin.component';
import { BensinDetailsComponent } from './components/bensin-details/bensin-details.component';
import { BensinListComponent } from './components/bensin-list/bensin-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddBensinComponent,
    BensinDetailsComponent,
    BensinListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
