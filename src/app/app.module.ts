import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormationComponent } from './to-do/formation.component';
import {StoreModule} from '@ngrx/store';
import {FormationReducer} from './formation.reducer';
import {EffectsModule} from '@ngrx/effects';
import {FormationEffects} from './formation.effects';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FormationComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({formations: FormationReducer}),
    EffectsModule.forRoot([FormationEffects]),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
