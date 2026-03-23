import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Starfield } from '../../../shared/components/starfield/starfield';
import { BackButton } from '../../../shared/components/back-button/back-button';
import { NavDots } from '../../../shared/components/nav-dots/nav-dots';
import { ScrollHint } from '../../../shared/components/scroll-hint/scroll-hint';
import { SceneHeading } from '../../../shared/components/scene-heading/scene-heading';
import { SceneVerse } from '../../../shared/components/scene-verse/scene-verse';

@Component({
  selector: 'app-mark',
  imports: [Starfield, BackButton, NavDots, ScrollHint, SceneHeading, SceneVerse],
  templateUrl: './mark.html',
  styleUrl: './mark.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Mark {
  readonly scenes = [
    { id: 'scene-intro', label: '開場' },
    { id: 'scene-baptism', label: '受洗與曠野' },
    { id: 'scene-miracles', label: '神蹟與醫治' },
    { id: 'scene-servant', label: '僕人君王' },
    { id: 'scene-gethsemane', label: '客西馬尼園' },
    { id: 'scene-risen', label: '復活' },
  ];
}
