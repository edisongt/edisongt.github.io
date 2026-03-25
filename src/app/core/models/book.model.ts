export interface BookInfo {
  id: string;
  title: string;
  subtitle: string;
  emoji: string;
  category: BookCategory;
  color: string;
  scenes: SceneInfo[];
}

export interface SceneInfo {
  id: string;
  label: string;
}

export type BookCategory =
  | 'pentateuch'
  | 'historical'
  | 'poetic'
  | 'major-prophets'
  | 'minor-prophets'
  | 'gospels'
  | 'church-history'
  | 'pauline-epistles'
  | 'general-epistles'
  | 'revelation';

export type Testament = 'old' | 'new';

export interface BookGroup {
  category: BookCategory;
  label: string;
  testament: Testament;
  books: BookInfo[];
}

export interface TestamentSection {
  testament: Testament;
  label: string;
  count: number;
  groups: BookGroup[];
}
