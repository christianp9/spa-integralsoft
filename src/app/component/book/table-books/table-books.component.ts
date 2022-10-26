import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {BookService} from "../../../service/book.service";
import {Routes} from "../../../config/constants";


@Component({
  selector: 'app-table-books',
  templateUrl: './table-books.component.html',
  styleUrls: ['./table-books.component.css']
})
export class TableBooksComponent implements OnInit {
  displayedColumns: string[] = ['sku', 'title', 'author', 'description','comments', 'created', 'modified'];

  constructor(private router: Router,
              public bookService: BookService) {
  }

  ngOnInit(): void {
    this.bookService.getBooks();
  }
  navigateCreateBook(): void {
    this.router.navigate([Routes.CREATE_BOOK]);
  }



}
