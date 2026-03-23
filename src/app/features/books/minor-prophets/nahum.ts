import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Starfield } from '../../../../shared/components/starfield/starfield';
import { BackButton } from '../../../../shared/components/back-button/back-button';
import { NavDots } from '../../../../shared/components/nav-dots/nav-dots';
import { ScrollHint } from '../../../../shared/components/scroll-hint/scroll-hint';
import { SceneHeading } from '../../../../shared/components/scene-heading/scene-heading';
import { SceneVerse } from '../../../../shared/components/scene-verse/scene-verse';

@Component({
  selector: 'app-nahum',
  imports: [Starfield, BackButton, NavDots, ScrollHint, SceneHeading, SceneVerse],
  templateUrl: './nahum.html',
  styleUrl: './nahum.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Nahum {
  readonly scenes = [
    { id: 'scene-intro', label: '開場' },
    { id: 'scene-majesty', label: '神的威嚴' },
    { id: 'scene-sin', label: '尼尼微的罪' },
    { id: 'scene-flood', label: '洪水傾覆' },
    { id: 'scene-lion', label: '獅穴荒廢' },
    { id: 'scene-justice', label: '公義得勝' },
  ];
}
