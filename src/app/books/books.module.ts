import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BooksRoutingModule } from './books-routing.module';

import { EditBookComponent } from './edit-book/edit-book.component';
import { BooksComponent } from './books.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { BookFiltersComponent } from './book-filters/book-filters.component';
import { BookCardComponent } from './book-card/book-card.component';
import { SelectedBookComponent } from './selected-book/selected-book.component';
import { BookCommonModule } from '../common/common.module';

@NgModule({
  declarations: [
    BooksComponent,
    EditBookComponent,
    BookSearchComponent,
    BookFiltersComponent,
    BookCardComponent,
    SelectedBookComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    BookCommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BooksModule { }
