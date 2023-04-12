import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbIconModule,
  NbButtonModule,
  NbThemeModule,
  NbCardModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot(),
    NbEvaIconsModule,
    NbIconModule,
    NbButtonModule,
    BrowserModule,
    NbCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
