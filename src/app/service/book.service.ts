import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Api, UrlIntegralSoft} from "../config/constants";
import {Book} from "../model/book-interface";
import { DatePipe } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  books:Book[] = [];

  constructor(private http: HttpClient,
              public datepipe: DatePipe) { }

  getBooks() {
     this.books = [];
    this.http.get<Book[]>(UrlIntegralSoft.url+Api.Books).subscribe(data => {
      this.books = data;
    });
  }

  create(book:Book) {
    this.http.post(UrlIntegralSoft.url+Api.Books,book).subscribe(data => {
      this.getBooks();
    });
  }



}
