import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableBooksComponent } from './component/book/table-books/table-books.component';
import { CreateBooksComponent } from './component/book/create-books/create-books.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material/table";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {HttpClientModule} from "@angular/common/http";
import {BookService} from "./service/book.service";
import {RoutingRoutingModule} from "./routing-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {DatePipe} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    TableBooksComponent,
    CreateBooksComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    RoutingRoutingModule,
    ReactiveFormsModule,

  ],
  providers: [BookService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
