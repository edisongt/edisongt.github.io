import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Starfield } from '../../../shared/components/starfield/starfield';
import { BackButton } from '../../../shared/components/back-button/back-button';
import { NavDots } from '../../../shared/components/nav-dots/nav-dots';
import { ScrollHint } from '../../../shared/components/scroll-hint/scroll-hint';
import { SceneHeading } from '../../../shared/components/scene-heading/scene-heading';
import { SceneVerse } from '../../../shared/components/scene-verse/scene-verse';

@Component({
  selector: 'app-psalms',
  imports: [Starfield, BackButton, NavDots, ScrollHint, SceneHeading, SceneVerse],
  templateUrl: './psalms.html',
  styleUrl: './psalms.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Psalms {
  readonly scenes = [
    { id: 'scene-intro', label: '開場' },
    { id: 'scene-praise', label: '讚美詩歌' },
    { id: 'scene-shepherd', label: '耶和華是我的牧者' },
    { id: 'scene-cry', label: '苦難中的呼求' },
    { id: 'scene-creation', label: '創造的讚美' },
    { id: 'scene-hallelujah', label: '哈利路亞' },
  ];
}
