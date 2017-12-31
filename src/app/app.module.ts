import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'; // for adding forms
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MatstylesComponent } from './matstyles/matstyles.component';
import { ContactComponent } from './contact/contact.component';

import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    MatstylesComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Add the FormsModule here
    BrowserAnimationsModule, // For animations
    MaterialModule // For adding buttons
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
