import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { BookDataService } from '../../core/services/book-data.service';

@Component({
  selector: 'app-book-page',
  template: '<p>Book: {{ bookId() }}</p>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookPage {
  private route = inject(ActivatedRoute);
  private bookData = inject(BookDataService);
  bookId = toSignal(
    this.route.params.pipe(map(p => p['bookId'] as string)),
    { initialValue: '' },
  );
}
