import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Starfield } from '../../../../shared/components/starfield/starfield';
import { BackButton } from '../../../../shared/components/back-button/back-button';
import { NavDots } from '../../../../shared/components/nav-dots/nav-dots';
import { ScrollHint } from '../../../../shared/components/scroll-hint/scroll-hint';
import { SceneHeading } from '../../../../shared/components/scene-heading/scene-heading';
import { SceneVerse } from '../../../../shared/components/scene-verse/scene-verse';

@Component({
  selector: 'app-lamentations',
  imports: [Starfield, BackButton, NavDots, ScrollHint, SceneHeading, SceneVerse],
  templateUrl: './lamentations.html',
  styleUrl: './lamentations.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Lamentations {
  readonly scenes = [
    { id: 'scene-intro', label: '開場' },
    { id: 'scene-desolate', label: '荒涼之城' },
    { id: 'scene-wrath', label: '神的忿怒' },
    { id: 'scene-weeping', label: '哀哭' },
    { id: 'scene-faithfulness', label: '黑暗中的信實' },
    { id: 'scene-prayer', label: '求復興的禱告' },
  ];
}
