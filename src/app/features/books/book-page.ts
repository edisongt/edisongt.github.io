import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookDataService } from '../../core/services/book-data.service';

@Component({
  selector: 'app-book-page',
  template: '<p>Book: {{ bookId() }}</p>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookPage {
  private route = inject(ActivatedRoute);
  private bookData = inject(BookDataService);
  bookId = signal('');

  constructor() {
    this.route.params.subscribe(params => {
      this.bookId.set(params['bookId']);
    });
  }
}
