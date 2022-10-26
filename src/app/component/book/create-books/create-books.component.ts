import { Component, OnInit } from '@angular/core';
import {Forms} from "../../../model/forms/book/book-form";
import {FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {BookService} from "../../../service/book.service";

@Component({
  selector: 'app-create-books',
  templateUrl: './create-books.component.html',
  styleUrls: ['./create-books.component.css']
})
export class CreateBooksComponent implements OnInit {

  formCreateBook: FormGroup = new Forms().FormCreateBook();

  constructor(private router: Router,
              public bookService: BookService) { }

  ngOnInit(): void {}

  create() {
    if(this.formCreateBook.valid){
      this.bookService.create(this.formCreateBook.value);
      this.router.navigate(['/tableBooks']);
    }
  }

}
