import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Starfield } from '../../../shared/components/starfield/starfield';
import { BackButton } from '../../../shared/components/back-button/back-button';
import { NavDots } from '../../../shared/components/nav-dots/nav-dots';
import { ScrollHint } from '../../../shared/components/scroll-hint/scroll-hint';
import { SceneHeading } from '../../../shared/components/scene-heading/scene-heading';
import { SceneVerse } from '../../../shared/components/scene-verse/scene-verse';

@Component({
  selector: 'app-1thessalonians',
  imports: [Starfield, BackButton, NavDots, ScrollHint, SceneHeading, SceneVerse],
  templateUrl: './1thessalonians.html',
  styleUrl: './1thessalonians.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FirstThessalonians {
  readonly scenes = [
    { id: 'scene-intro', label: '開場' },
    { id: 'scene-faith', label: '信心的榜樣' },
    { id: 'scene-sanctify', label: '成為聖潔' },
    { id: 'scene-encourage', label: '彼此勸慰' },
    { id: 'scene-return', label: '主必再來' },
    { id: 'scene-rejoice', label: '常常喜樂' },
  ];
}
