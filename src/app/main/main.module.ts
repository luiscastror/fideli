import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';

import {
  NbSidebarModule,
  NbLayoutModule,
  NbCardModule,
  NbMenuModule,
  NbButtonModule,
} from '@nebular/theme';

import { MainComponent } from './main.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [MainComponent, ProfileComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbButtonModule,
    NbLayoutModule,
    NbCardModule,
  ],
})
export class MainModule {}
