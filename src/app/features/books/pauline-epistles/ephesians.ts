import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Starfield } from '../../../shared/components/starfield/starfield';
import { BackButton } from '../../../shared/components/back-button/back-button';
import { NavDots } from '../../../shared/components/nav-dots/nav-dots';
import { ScrollHint } from '../../../shared/components/scroll-hint/scroll-hint';
import { SceneHeading } from '../../../shared/components/scene-heading/scene-heading';
import { SceneVerse } from '../../../shared/components/scene-verse/scene-verse';

@Component({
  selector: 'app-ephesians',
  imports: [Starfield, BackButton, NavDots, ScrollHint, SceneHeading, SceneVerse],
  templateUrl: './ephesians.html',
  styleUrl: './ephesians.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Ephesians {
  readonly scenes = [
    { id: 'scene-intro', label: '開場' },
    { id: 'scene-blessing', label: '屬靈的福氣' },
    { id: 'scene-grace', label: '本乎恩因著信' },
    { id: 'scene-unity', label: '靈裏的合一' },
    { id: 'scene-church', label: '基督與召會' },
    { id: 'scene-armor', label: '神的全副軍裝' },
  ];
}
