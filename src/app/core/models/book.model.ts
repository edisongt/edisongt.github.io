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
  | 'gospels';

export interface BookGroup {
  category: BookCategory;
  label: string;
  books: BookInfo[];
}
