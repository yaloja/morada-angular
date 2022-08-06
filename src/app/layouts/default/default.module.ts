import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from 'src/app/modules/home/home.component';
import { RouterModule } from '@angular/router';
import { DefaultComponent } from './default.component';
import { ContactComponent } from 'src/app/modules/contact/contact.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class DefaultModule { }
