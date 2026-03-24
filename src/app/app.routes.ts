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

  // Pentateuch
  { path: 'book/genesis', loadComponent: () => import('./features/books/pentateuch/genesis').then(m => m.Genesis) },
  { path: 'book/exodus', loadComponent: () => import('./features/books/pentateuch/exodus').then(m => m.Exodus) },
  { path: 'book/leviticus', loadComponent: () => import('./features/books/pentateuch/leviticus').then(m => m.Leviticus) },
  { path: 'book/numbers', loadComponent: () => import('./features/books/pentateuch/numbers').then(m => m.Numbers) },
  { path: 'book/deuteronomy', loadComponent: () => import('./features/books/pentateuch/deuteronomy').then(m => m.Deuteronomy) },

  // Historical
  { path: 'book/joshua', loadComponent: () => import('./features/books/historical/joshua').then(m => m.Joshua) },
  { path: 'book/judges', loadComponent: () => import('./features/books/historical/judges').then(m => m.Judges) },
  { path: 'book/ruth', loadComponent: () => import('./features/books/historical/ruth').then(m => m.Ruth) },
  { path: 'book/1samuel', loadComponent: () => import('./features/books/historical/1samuel').then(m => m.FirstSamuel) },
  { path: 'book/2samuel', loadComponent: () => import('./features/books/historical/2samuel').then(m => m.SecondSamuel) },
  { path: 'book/1kings', loadComponent: () => import('./features/books/historical/1kings').then(m => m.FirstKings) },
  { path: 'book/2kings', loadComponent: () => import('./features/books/historical/2kings').then(m => m.SecondKings) },
  { path: 'book/1chronicles', loadComponent: () => import('./features/books/historical/1chronicles').then(m => m.FirstChronicles) },
  { path: 'book/2chronicles', loadComponent: () => import('./features/books/historical/2chronicles').then(m => m.SecondChronicles) },
  { path: 'book/ezra', loadComponent: () => import('./features/books/historical/ezra').then(m => m.Ezra) },
  { path: 'book/nehemiah', loadComponent: () => import('./features/books/historical/nehemiah').then(m => m.Nehemiah) },
  { path: 'book/esther', loadComponent: () => import('./features/books/historical/esther').then(m => m.Esther) },

  // Poetic
  { path: 'book/job', loadComponent: () => import('./features/books/poetic/job').then(m => m.Job) },
  { path: 'book/psalms', loadComponent: () => import('./features/books/poetic/psalms').then(m => m.Psalms) },
  { path: 'book/proverbs', loadComponent: () => import('./features/books/poetic/proverbs').then(m => m.Proverbs) },
  { path: 'book/ecclesiastes', loadComponent: () => import('./features/books/poetic/ecclesiastes').then(m => m.Ecclesiastes) },
  { path: 'book/songofsolomon', loadComponent: () => import('./features/books/poetic/songofsolomon').then(m => m.SongOfSolomon) },

  // Major Prophets
  { path: 'book/isaiah', loadComponent: () => import('./features/books/major-prophets/isaiah').then(m => m.Isaiah) },
  { path: 'book/jeremiah', loadComponent: () => import('./features/books/major-prophets/jeremiah').then(m => m.Jeremiah) },
  { path: 'book/lamentations', loadComponent: () => import('./features/books/major-prophets/lamentations').then(m => m.Lamentations) },
  { path: 'book/ezekiel', loadComponent: () => import('./features/books/major-prophets/ezekiel').then(m => m.Ezekiel) },
  { path: 'book/daniel', loadComponent: () => import('./features/books/major-prophets/daniel').then(m => m.Daniel) },

  // Minor Prophets
  { path: 'book/hosea', loadComponent: () => import('./features/books/minor-prophets/hosea').then(m => m.Hosea) },
  { path: 'book/joel', loadComponent: () => import('./features/books/minor-prophets/joel').then(m => m.Joel) },
  { path: 'book/amos', loadComponent: () => import('./features/books/minor-prophets/amos').then(m => m.Amos) },
  { path: 'book/obadiah', loadComponent: () => import('./features/books/minor-prophets/obadiah').then(m => m.Obadiah) },
  { path: 'book/jonah', loadComponent: () => import('./features/books/minor-prophets/jonah').then(m => m.Jonah) },
  { path: 'book/micah', loadComponent: () => import('./features/books/minor-prophets/micah').then(m => m.Micah) },
  { path: 'book/nahum', loadComponent: () => import('./features/books/minor-prophets/nahum').then(m => m.Nahum) },
  { path: 'book/habakkuk', loadComponent: () => import('./features/books/minor-prophets/habakkuk').then(m => m.Habakkuk) },
  { path: 'book/zephaniah', loadComponent: () => import('./features/books/minor-prophets/zephaniah').then(m => m.Zephaniah) },
  { path: 'book/haggai', loadComponent: () => import('./features/books/minor-prophets/haggai').then(m => m.Haggai) },
  { path: 'book/zechariah', loadComponent: () => import('./features/books/minor-prophets/zechariah').then(m => m.Zechariah) },
  { path: 'book/malachi', loadComponent: () => import('./features/books/minor-prophets/malachi').then(m => m.Malachi) },

  // Gospels
  { path: 'book/matthew', loadComponent: () => import('./features/books/gospels/matthew').then(m => m.Matthew) },
  { path: 'book/mark', loadComponent: () => import('./features/books/gospels/mark').then(m => m.Mark) },
  { path: 'book/luke', loadComponent: () => import('./features/books/gospels/luke').then(m => m.Luke) },
  { path: 'book/john', loadComponent: () => import('./features/books/gospels/john').then(m => m.John) },

  // Acts
  { path: 'book/acts', loadComponent: () => import('./features/books/acts/acts').then(m => m.Acts) },

  {
    path: '**',
    redirectTo: '',
  }
];
