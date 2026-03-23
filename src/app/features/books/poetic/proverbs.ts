import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Starfield } from '../../../../shared/components/starfield/starfield';
import { BackButton } from '../../../../shared/components/back-button/back-button';
import { NavDots } from '../../../../shared/components/nav-dots/nav-dots';
import { ScrollHint } from '../../../../shared/components/scroll-hint/scroll-hint';
import { SceneHeading } from '../../../../shared/components/scene-heading/scene-heading';
import { SceneVerse } from '../../../../shared/components/scene-verse/scene-verse';

@Component({
  selector: 'app-proverbs',
  imports: [Starfield, BackButton, NavDots, ScrollHint, SceneHeading, SceneVerse],
  templateUrl: './proverbs.html',
  styleUrl: './proverbs.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Proverbs {
  readonly scenes = [
    { id: 'scene-intro', label: '開場' },
    { id: 'scene-wisdom', label: '智慧的呼喚' },
    { id: 'scene-paths', label: '兩條道路' },
    { id: 'scene-instruction', label: '父親的教訓' },
    { id: 'scene-ant', label: '勤勞的螞蟻' },
    { id: 'scene-virtuous', label: '才德的婦人' },
  ];
}
