import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Starfield } from '../../../shared/components/starfield/starfield';
import { BackButton } from '../../../shared/components/back-button/back-button';
import { NavDots } from '../../../shared/components/nav-dots/nav-dots';
import { ScrollHint } from '../../../shared/components/scroll-hint/scroll-hint';
import { SceneHeading } from '../../../shared/components/scene-heading/scene-heading';
import { SceneVerse } from '../../../shared/components/scene-verse/scene-verse';

@Component({
  selector: 'app-2corinthians',
  imports: [Starfield, BackButton, NavDots, ScrollHint, SceneHeading, SceneVerse],
  templateUrl: './2corinthians.html',
  styleUrl: './2corinthians.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SecondCorinthians {
  readonly scenes = [
    { id: 'scene-intro', label: '開場' },
    { id: 'scene-comfort', label: '患難中的安慰' },
    { id: 'scene-treasure', label: '瓦器裏的寶貝' },
    { id: 'scene-new', label: '新造的人' },
    { id: 'scene-weakness', label: '軟弱中的剛強' },
    { id: 'scene-grace', label: '神恩夠用' },
  ];
}
