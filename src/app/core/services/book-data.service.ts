import { Injectable } from '@angular/core';
import {
  BookInfo,
  BookCategory,
  BookGroup,
  SceneInfo,
  Testament,
  TestamentSection,
} from '../models/book.model';

const DEFAULT_SCENES: SceneInfo[] = [
  { id: 'scene-1', label: '開場' },
  { id: 'scene-2', label: '第二幕' },
  { id: 'scene-3', label: '第三幕' },
  { id: 'scene-4', label: '第四幕' },
  { id: 'scene-5', label: '第五幕' },
  { id: 'scene-6', label: '第六幕' },
];

function book(
  id: string,
  emoji: string,
  title: string,
  subtitle: string,
  category: BookCategory,
  color: string,
): BookInfo {
  return { id, emoji, title, subtitle, category, color, scenes: [...DEFAULT_SCENES] };
}

const ALL_BOOKS: BookInfo[] = [
  // Pentateuch 摩西五經
  book('genesis',      '🌅', '創世記',     'Book of Genesis',      'pentateuch', '#c8a030'),
  book('exodus',       '🔥', '出埃及記',   'Book of Exodus',       'pentateuch', '#d04030'),
  book('leviticus',    '⛪', '利未記',     'Book of Leviticus',    'pentateuch', '#6a9a6a'),
  book('numbers',      '🏜️', '民數記',     'Book of Numbers',      'pentateuch', '#c8a060'),
  book('deuteronomy',  '📜', '申命記',     'Book of Deuteronomy',  'pentateuch', '#5080b0'),

  // Historical 歷史書
  book('joshua',       '⚔️', '約書亞記',   'Book of Joshua',       'historical', '#66cc66'),
  book('judges',       '🗡️', '士師記',     'Book of Judges',       'historical', '#e07060'),
  book('ruth',         '🌾', '路得記',     'Book of Ruth',         'historical', '#daa520'),
  book('1samuel',      '👑', '撒母耳記上', 'Book of 1 Samuel',     'historical', '#8090dd'),
  book('2samuel',      '🏰', '撒母耳記下', 'Book of 2 Samuel',     'historical', '#daa520'),
  book('1kings',       '👑', '列王紀上',   'Book of 1 Kings',      'historical', '#c8a030'),
  book('2kings',       '🔥', '列王紀下',   'Book of 2 Kings',      'historical', '#d06040'),
  book('1chronicles',  '📜', '歷代志上',   'Book of 1 Chronicles', 'historical', '#5080b0'),
  book('2chronicles',  '🏛️', '歷代志下',   'Book of 2 Chronicles', 'historical', '#7a6a8a'),
  book('ezra',         '📖', '以斯拉記',   'Book of Ezra',         'historical', '#6a9a6a'),
  book('nehemiah',     '🧱', '尼希米記',   'Book of Nehemiah',     'historical', '#c8a060'),
  book('esther',       '👸', '以斯帖記',   'Book of Esther',       'historical', '#e88ca5'),

  // Poetic 詩歌書
  book('job',            '🕊️', '約伯記',   'Book of Job',              'poetic', '#5cbdaa'),
  book('psalms',         '🎵', '詩篇',     'Book of Psalms',           'poetic', '#7b68ee'),
  book('proverbs',       '💎', '箴言',     'Book of Proverbs',         'poetic', '#50c878'),
  book('ecclesiastes',   '⏳', '傳道書',   'Book of Ecclesiastes',     'poetic', '#e6a040'),
  book('songofsolomon',  '🌹', '雅歌',     'Song of Solomon',          'poetic', '#e88ca5'),

  // Major Prophets 大先知書
  book('isaiah',        '🕊️', '以賽亞書',     'Book of Isaiah',        'major-prophets', '#4a6fa5'),
  book('jeremiah',      '🔥', '耶利米書',     'Book of Jeremiah',      'major-prophets', '#c25450'),
  book('lamentations',  '😢', '耶利米哀歌',   'Book of Lamentations',  'major-prophets', '#7a6a8a'),
  book('ezekiel',       '👁️', '以西結書',     'Book of Ezekiel',       'major-prophets', '#3aaa7a'),
  book('daniel',        '🦁', '但以理書',     'Book of Daniel',        'major-prophets', '#c8a030'),

  // Minor Prophets 小先知書
  book('hosea',      '💔', '何西阿書',     'Book of Hosea',      'minor-prophets', '#e06070'),
  book('joel',       '🌪️', '約珥書',       'Book of Joel',       'minor-prophets', '#4488cc'),
  book('amos',       '⚖️', '阿摩司書',     'Book of Amos',       'minor-prophets', '#b8860b'),
  book('obadiah',    '⛰️', '俄巴底亞書',   'Book of Obadiah',    'minor-prophets', '#8b4513'),
  book('jonah',      '🐋', '約拿書',       'Book of Jonah',      'minor-prophets', '#2090a0'),
  book('micah',      '🏔️', '彌迦書',       'Book of Micah',      'minor-prophets', '#6a9a6a'),
  book('nahum',      '⚡', '那鴻書',       'Book of Nahum',      'minor-prophets', '#c04040'),
  book('habakkuk',   '🙏', '哈巴谷書',     'Book of Habakkuk',   'minor-prophets', '#7070b0'),
  book('zephaniah',  '🌑', '西番雅書',     'Book of Zephaniah',  'minor-prophets', '#a0522d'),
  book('haggai',     '🏗️', '哈該書',       'Book of Haggai',     'minor-prophets', '#d4a050'),
  book('zechariah',  '🌿', '撒迦利亞書',   'Book of Zechariah',  'minor-prophets', '#5080b0'),
  book('malachi',    '🔥', '瑪拉基書',     'Book of Malachi',    'minor-prophets', '#a04080'),

  // Gospels 福音書
  book('matthew', '✝️', '馬太福音',  'Gospel of Matthew', 'gospels', '#c8a030'),
  book('mark',    '🦁', '馬可福音',  'Gospel of Mark',    'gospels', '#d06040'),
  book('luke',    '🕊️', '路加福音',  'Gospel of Luke',    'gospels', '#5a9aaa'),
  book('john',    '🦅', '約翰福音',  'Gospel of John',    'gospels', '#e0a840'),

  // Acts 使徒行傳
  book('acts', '🔥', '使徒行傳', 'Acts of the Apostles', 'church-history', '#e05030'),

  // Pauline Epistles 保羅書信
  book('romans',           '📖', '羅馬書',         'Epistle to the Romans',                    'pauline-epistles', '#6a5acd'),
  book('1corinthians',     '💌', '哥林多前書',     'First Epistle to the Corinthians',         'pauline-epistles', '#5a8aaa'),
  book('2corinthians',     '💌', '哥林多後書',     'Second Epistle to the Corinthians',        'pauline-epistles', '#5a9a8a'),
  book('galatians',        '⛓️', '加拉太書',       'Epistle to the Galatians',                 'pauline-epistles', '#d4a040'),
  book('ephesians',        '🏛️', '以弗所書',       'Epistle to the Ephesians',                 'pauline-epistles', '#4a80b0'),
  book('philippians',      '😊', '腓立比書',       'Epistle to the Philippians',               'pauline-epistles', '#7a6aaa'),
  book('colossians',       '👑', '歌羅西書',       'Epistle to the Colossians',                'pauline-epistles', '#5aaa7a'),
  book('1thessalonians',   '⏳', '帖撒羅尼迦前書', 'First Epistle to the Thessalonians',       'pauline-epistles', '#6080b0'),
  book('2thessalonians',   '⏳', '帖撒羅尼迦後書', 'Second Epistle to the Thessalonians',      'pauline-epistles', '#5070a0'),
  book('1timothy',         '📝', '提摩太前書',     'First Epistle to Timothy',                 'pauline-epistles', '#6a9a6a'),
  book('2timothy',         '📝', '提摩太後書',     'Second Epistle to Timothy',                'pauline-epistles', '#5a8a5a'),
  book('titus',            '🏝️', '提多書',         'Epistle to Titus',                         'pauline-epistles', '#b08040'),
  book('philemon',         '🤝', '腓利門書',       'Epistle to Philemon',                      'pauline-epistles', '#c07050'),

  // General Epistles 大公書信
  book('hebrews',  '⛪', '希伯來書',   'Epistle to the Hebrews',     'general-epistles', '#b07040'),
  book('james',    '🪞', '雅各書',     'Epistle of James',           'general-epistles', '#6aaa5a'),
  book('1peter',   '🪨', '彼得前書',   'First Epistle of Peter',     'general-epistles', '#5080b0'),
  book('2peter',   '🪨', '彼得後書',   'Second Epistle of Peter',    'general-epistles', '#4070a0'),
  book('1john',    '❤️', '約翰一書',   'First Epistle of John',      'general-epistles', '#e0a840'),
  book('2john',    '❤️', '約翰二書',   'Second Epistle of John',     'general-epistles', '#d09830'),
  book('3john',    '❤️', '約翰三書',   'Third Epistle of John',      'general-epistles', '#c08820'),
  book('jude',     '🛡️', '猶大書',     'Epistle of Jude',            'general-epistles', '#8060a0'),

  // Revelation 啟示錄
  book('revelation', '🔮', '啟示錄', 'Book of Revelation', 'revelation', '#a03060'),
];

const GROUP_LABELS: Record<BookCategory, string> = {
  pentateuch:          '律法書 · Pentateuch',
  historical:          '歷史書 · Historical Books',
  poetic:              '詩歌智慧書 · Poetic Books',
  'major-prophets':    '大先知書 · Major Prophets',
  'minor-prophets':    '小先知書 · Minor Prophets',
  gospels:             '四福音書 · Gospels',
  'church-history':    '教會歷史 · Church History',
  'pauline-epistles':  '保羅書信 · Pauline Epistles',
  'general-epistles':  '大公書信 · General Epistles',
  revelation:          '預言書 · Revelation',
};

const TESTAMENT_MAP: Record<BookCategory, Testament> = {
  pentateuch:         'old',
  historical:         'old',
  poetic:             'old',
  'major-prophets':   'old',
  'minor-prophets':   'old',
  gospels:            'new',
  'church-history':   'new',
  'pauline-epistles': 'new',
  'general-epistles': 'new',
  revelation:         'new',
};

const TESTAMENT_LABELS: Record<Testament, { label: string; count: number }> = {
  old: { label: '舊約 · Old Testament', count: 39 },
  new: { label: '新約 · New Testament', count: 27 },
};

const CATEGORY_ORDER: BookCategory[] = [
  'pentateuch',
  'historical',
  'poetic',
  'major-prophets',
  'minor-prophets',
  'gospels',
  'church-history',
  'pauline-epistles',
  'general-epistles',
  'revelation',
];

@Injectable({ providedIn: 'root' })
export class BookDataService {
  private readonly books = ALL_BOOKS;

  getAllBooks(): BookInfo[] {
    return this.books;
  }

  getBookById(id: string): BookInfo | undefined {
    return this.books.find(b => b.id === id);
  }

  getBooksByCategory(category: BookCategory): BookInfo[] {
    return this.books.filter(b => b.category === category);
  }

  getBookGroups(): BookGroup[] {
    return CATEGORY_ORDER.map(category => ({
      category,
      label: GROUP_LABELS[category],
      testament: TESTAMENT_MAP[category],
      books: this.getBooksByCategory(category),
    }));
  }

  getTestamentSections(): TestamentSection[] {
    const groups = this.getBookGroups();
    const testaments: Testament[] = ['old', 'new'];
    return testaments.map(testament => ({
      testament,
      label: TESTAMENT_LABELS[testament].label,
      count: TESTAMENT_LABELS[testament].count,
      groups: groups.filter(g => g.testament === testament && g.books.length > 0),
    }));
  }
}
