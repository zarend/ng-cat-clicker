import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CatComponent } from './cat/cat.component';
import { CatListComponent } from './cat-list/cat-list.component';
import { CoolNamePipe } from './cool-name.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatListModule} from '@angular/material/list'
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    CatComponent,
    CatListComponent,
    CoolNamePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatListModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
