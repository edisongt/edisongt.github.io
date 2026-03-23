import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home').then(m => m.Home),
  },
  {
    path: 'wiki',
    loadComponent: () => import('./features/wiki/wiki').then(m => m.Wiki),
  },
  {
    path: 'book/:bookId',
    loadComponent: () => import('./features/books/book-page').then(m => m.BookPage),
  },
  {
    path: '**',
    redirectTo: '',
  }
];
