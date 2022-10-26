import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TableBooksComponent} from "./component/book/table-books/table-books.component";
import {CreateBooksComponent} from "./component/book/create-books/create-books.component";

const routes: Routes = [
  { path: '', redirectTo: 'tableBooks', pathMatch: 'full' },
  { path: 'tableBooks', component: TableBooksComponent },
  { path: 'createBook', component: CreateBooksComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingRoutingModule { }
