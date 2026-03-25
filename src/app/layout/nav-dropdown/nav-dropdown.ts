import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BookDataService } from '../../core/services/book-data.service';

@Component({
  selector: 'app-nav-dropdown',
  imports: [RouterLink],
  template: `
    <div class="nav-dropdown">
      <button class="nav-toggle" (click)="open.set(!open())">
        📖 聖經目錄 · Books
      </button>
      @if (open()) {
        <div class="dropdown-panel">
          @for (section of testamentSections; track section.testament) {
            <div class="testament-section">
              <div class="testament-header">
                <span class="testament-label">{{ section.label }}</span>
                <span class="testament-count">{{ section.count }} 卷</span>
              </div>
              @for (group of section.groups; track group.category) {
                <div class="book-group">
                  <h3 class="group-label">{{ group.label }}</h3>
                  <div class="book-list">
                    @for (book of group.books; track book.id) {
                      <a
                        class="book-link"
                        [routerLink]="['/book', book.id]"
                        (click)="open.set(false)"
                      >
                        <span class="book-emoji">{{ book.emoji }}</span>
                        <span class="book-title">{{ book.title }}</span>
                      </a>
                    }
                  </div>
                </div>
              }
            </div>
          }
        </div>
      }
    </div>
  `,
  styleUrl: './nav-dropdown.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavDropdown {
  private bookDataService = inject(BookDataService);
  readonly testamentSections = this.bookDataService.getTestamentSections();
  open = signal(false);
}
