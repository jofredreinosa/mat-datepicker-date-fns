import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule, MatDateFormats, DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { DateFnsModule, DateFnsAdapter } from '@angular/material-date-fns-adapter';
import { es } from 'date-fns/locale';


export const DATE_FORMATS: MatDateFormats = {
  parse: { dateInput: 'dd-MM-yyyy'},
  display: {
    dateInput: 'dd-MM-yyyy',
    monthYearLabel: 'MMM yyyy',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'yyyy'
  }
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatProgressSpinnerModule
  ],
  providers: [
    { provide: DateAdapter, useClass: DateFnsAdapter},
    { provide: MAT_DATE_FORMATS, useValue: DATE_FORMATS},
    { provide: MAT_DATE_LOCALE, useValue: es}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
