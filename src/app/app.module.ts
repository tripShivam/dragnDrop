import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { FilterComponent } from './filter/filter.component';
import { MatCardModule} from '@angular/material/card';  
import { MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import { CardContainerComponent } from './card-container/card-container.component';
import { NgDragDropModule } from 'ng-drag-drop';
import { MatChipsModule } from '@angular/material/chips'; 

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FilterComponent,
    CardContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    NgDragDropModule.forRoot(),
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
